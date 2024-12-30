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
import { ArticleAddEditFormValidation } from "@/lib/validations/article.validate";
import { articleCategoryData } from "@/data/dummy.data";
import { TextAreaInput } from "@/components/core/inputs/TextAreaInput";
import EditIcon from "@/components/core/icons/dashboard/EditIcon";
import { useCreatePhoto } from "@/hooks/photo.hooks";

type PhotosFormType = {
  instance?: any;
};

const PhotosForm: FC<PhotosFormType> = ({ instance }) => {
  const [open, setOpen] = useState(false);
  const { mutateAsync } = useCreatePhoto();

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
      image: instance?.image || "",
    },

    // validationSchema: ArticleAddEditFormValidation,
    onSubmit: async (data: any) => {
      try {
        // Debugging: Check the form data
        console.log("Form data before submission:", data);

        let form_data = new FormData();
        if (data?.image?.name) {
          form_data.append("image", data.image);
        }
        form_data.append("category", "regular");

        // Debugging: Check the form data before sending it
        console.log("Form data being submitted:", form_data);

        if (instance) {
          // Handling the case when it's an edit
          resetForm();
          setOpen(!open);
          toast({
            variant: "default",
            description: "Data Edited Successfully!",
          });
        } else {
          // Handling the case when it's a new submit
          await mutateAsync(form_data);
          toast({
            variant: "default",
            description: "Congratulations! New Added Successfully.",
          });
          resetForm();
          setOpen(!open);
        }
      } catch (err: any) {
        console.error("Error during submission:", err);
        if (err.errors) {
          for (const key of err.errors) {
            console.log(key);
            toast({
              variant: "destructive",
              description: `${key?.attr} - ${key?.detail}`,
            });
          }
        } else {
          toast({
            variant: "destructive",
            description: "An unexpected error occurred.",
          });
        }
      }
    },
  });

  // Debugging: Formik values during the form lifecycle
  console.log("Formik values:", values);

  return (
    <div className="rounded-[12px]">
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        {instance ? (
          <div
            onClick={() => setOpen(!open)}
            className="border border-green-500 bg-green-100 text-green-800 cursor-pointer flex items-center justify-center p-2.5 rounded-full w-fit"
          >
            <EditIcon />
          </div>
        ) : (
          <div onClick={() => setOpen(!open)}>
            <div className="hidden lg:block p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300 rounded-full">
              <Button
                className=""
                variant="roundedOutlineBtn"
                label="Add Photo"
              />
            </div>
          </div>
        )}

        <DialogContent className="max-h-[80%] overflow-auto">
          <DialogHeader>
            <DialogTitle>Add New Photo</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <form
            className="space-y-6"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <ImgUploadField
              error={Boolean(errors.image) && touched.image && errors.image}
              setValue={(x: any) => setFieldValue("image", x)}
              value={values.image}
            />

            <div className="w-full flex justify-center">
              <Button
                type="submit"
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

export default PhotosForm;
