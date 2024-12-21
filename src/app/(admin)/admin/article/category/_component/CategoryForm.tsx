"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
// import * as Yup from 'yup';
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import ImgUploadField from "@/components/core/inputs/ImgUploadField";
// import { ArticleAddEditFormValidation } from "@/lib/validations/article.validate";
// import { articleCategoryData } from "@/data/dummy.data";
// import { TextAreaInput } from "@/components/core/inputs/TextAreaInput";
import EditIcon from "@/components/core/icons/dashboard/EditIcon";
import { useCreateCategory } from "../_hooks/category.hook";

type CategoryFormType = {
  instance?: any;
};

const CategoryForm: FC<CategoryFormType> = ({ instance }) => {
  const [open, setOpen] = useState(false);
  const { mutateAsync } = useCreateCategory();

  // setFieldValue,
  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: instance?.name || "",
      image: instance?.image || "",
    },

    // validationSchema: ArticleAddEditFormValidation,
    onSubmit: async (data: any) => {
      try {
        let form_data = new FormData();

        form_data.append("name", data.name);
        if (data?.image && data.image instanceof File) {
          form_data.append("image", data.image);
        }

        console.log(data);
        const result = await mutateAsync(form_data);
        return console.log(result);
        resetForm();
        setOpen(!open);
        if (instance) {
          toast({
            variant: "default",
            description: "Data Edited Successfully!",
          });
        } else {
          toast({
            variant: "default",
            description: "Congratulations! New Added Successfully.",
          });
        }
      } catch (err: any) {
        for (const key of err.errors) {
          console.log(key);
          toast({
            variant: "destructive",
            description: `${key?.attr} - ${key?.detail}`,
          });
        }
      }
    },
  });

  console.log(values);

  return (
    <div className=" rounded-[12px]">
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        {instance ? (
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer flex gap-2 p-2  w-full items-center"
          >
            <EditIcon /> <span>Edit</span>
          </div>
        ) : (
          <div onClick={() => setOpen(!open)}>
            <div className="hidden lg:block p-[2.5px]  bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
              <Button
                className=""
                // variant="roundedOutlineBtn"
                label="Add Categoryy"
              />
            </div>
          </div>
        )}

        <DialogContent className="max-h-[80%] overflow-auto">
          <DialogHeader>
            <DialogTitle>Create New Category</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <form
            className="space-y-6"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextInput
              className="w-full"
              id="name"
              label="Enter Author Name"
              value={values.name}
              onChange={handleChange}
              type="text"
              error={Boolean(errors.name) && touched.name && errors.name}
            />

            <ImgUploadField
              //   width={150}
              //   height={150}
              error={Boolean(errors.image) && touched.image && errors.image}
              setValue={(x: any) => setFieldValue("image", x)}
              value={values.image}
            />

            <div className="w-full flex justify-center">
              <Button
                disabled={isSubmitting}
                className="w-full"
                variant={"regulerBtn"}
                label={isSubmitting ? "Publishing.." : "Publish"}
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryForm;
