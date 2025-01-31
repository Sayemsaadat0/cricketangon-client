"use client";
import { useFormik } from "formik";
import { FC, useState } from "react";
// import * as Yup from 'yup';
import Button from "@/components/core/button/Button";
import ImgUploadField from "@/components/core/inputs/ImgUploadField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
// import { ArticleAddEditFormValidation } from "@/lib/validations/article.validate";
// import { articleCategoryData } from "@/data/dummy.data";
// import { TextAreaInput } from "@/components/core/inputs/TextAreaInput";
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
      image: instance?.image
        ? instance.image.startsWith("http")
          ? instance.image
          : `${process.env.NEXT_PUBLIC_IMAGE_URL}${instance.image}`
        : "",
      category: instance?.category || "regular",
    },

    onSubmit: async (data: any) => {
      try {
        let formData = new FormData();
        formData.append("category", data.category);

        if (data.image instanceof File) {
          formData.append("image", data.image);
        } else if (data.image) {
          const imageUrl = data.image.startsWith("http")
            ? data.image.replace(process.env.NEXT_PUBLIC_IMAGE_URL, "")
            : data.image;
          formData.append("image", imageUrl);
        }

        if (instance) {
          toast({
            variant: "default",
            description: "Data Edited Successfully!",
          });
        } else {
          const result = await mutateAsync(formData);
          toast({
            variant: "default",
            description: "Congratulations! New Added Successfully.",
          });
        }
        resetForm();
        setOpen(!open);
      } catch (err: any) {
        console.error("Error during submission:", err);
        if (err.errors) {
          for (const key of err.errors) {
            // console.log(key);
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
  // console.log("Formik values:", values);

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
            {/* Category Select Field */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                className="border border-gray-300 rounded-[8px] p-2.5 "
              >
                <option value="regular">Regular</option>
                <option value="moment">Moment</option>
              </select>
              {/* {errors.category && touched.category && (
                <p className="text-sm text-red-500">{errors.category}</p>
              )} */}
            </div>

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
