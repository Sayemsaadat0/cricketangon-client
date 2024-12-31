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
import { TextAreaInput } from "@/components/core/inputs/TextAreaInput";
import EditIcon from "@/components/core/icons/dashboard/EditIcon";
import { useGetCategory } from "@/app/(admin)/admin/article/category/_hooks/category.hook";
import { useCreateArticle } from "@/app/(admin)/admin/article/_hook/article.hook";
import { useAuth } from "@/context/AuthContext";

type ArticleFormType = {
  instance?: any;
};

const ArticleForm: FC<ArticleFormType> = ({ instance }) => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { data: categoryData } = useGetCategory();
  const { mutateAsync } = useCreateArticle();
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
      authorName: instance?.authorName || "",
      title: instance?.title || "",
      categoryId: instance?.categoryId || 0,
  
      image: instance?.image
        ? instance.image.startsWith("http")
          ? instance.image
          : `${process.env.NEXT_PUBLIC_IMAGE_URL}${instance.image}`
        : "",

      description: instance?.description || "",
      userId: user?.id,
    },

    // validationSchema: ArticleAddEditFormValidation,
    onSubmit: async (data: any) => {
      try {
        const formData = new FormData();
        formData.append("authorName", data.authorName);
        formData.append("title", data.title);
        formData.append("categoryId", data.categoryId);
        formData.append("description", data.description);
        formData.append("userId", String(user?.id || ""));
     
        if (data.image instanceof File) {
          formData.append("image", data.image);
        } else if (data.image) {
          const imageUrl = data.image.startsWith("http")
            ? data.image.replace(process.env.NEXT_PUBLIC_IMAGE_URL, "")
            : data.image;
          formData.append("image", imageUrl);
        }

        if (instance) {
          // console.log("Editing Article:", formData);
        } else {
          const result = await mutateAsync(formData);
          // console.log(result);
          if (result.success) {
            toast({
              variant: "default",
              description: instance
                ? "Data Edited Successfully!"
                : "Congratulations! New Added Successfully.",
            });
          }
          resetForm();
          setOpen(false);
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
  });
  console.log(values)
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
            <div className="hidden lg:block p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
              <Button
                className="bg-c-violet-500 text"
                label="Add Article"
              />
            </div>
          </div>
        )}

        <DialogContent className="max-h-[80%] customScrollbar overflow-auto">
          <DialogHeader>
            <DialogTitle>Add New Article</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <form
            className="space-y-6"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextInput
              className="w-full"
              id="authorName"
              label="Enter Author Name"
              value={values.authorName}
              onChange={handleChange}
              type="text"
              error={
                Boolean(errors.authorName) &&
                touched.authorName &&
                errors.authorName
              }
            />

            <TextInput
              className="w-full"
              id="title"
              label="Article Title"
              value={values.title}
              onChange={handleChange}
              type="text"
              error={Boolean(errors.title) && touched.title && errors.title}
            />

            <div>
              <select
                id="categoryId"
                name="categoryId"
                value={values.categoryId}  // Use categoryId here
                onChange={(e) =>
                  setFieldValue("categoryId", Number(e.target.value)) // Correct categoryId
                }
                className="py-2 px-3 md:px-[30px] md:py-[14px] border border-c-white-600 no-arrow w-full  rounded-[10px] outline-none bg-inherit text-[14px] bg-white m-0 placeholder-text-oc-white-800 text-oc-primary-1-900"
              >
                <option className="" value="" disabled>
                  Select Category
                </option>
                {categoryData &&
                  categoryData?.data?.data.map((c: any) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
              </select>

              {Boolean(errors.category) && touched.category && (
                <div className="text-red-500 text-sm">
                  {typeof errors.category === "string" && errors?.category}
                </div>
              )}
            </div>

            <ImgUploadField
              // width={150}
              // height={150}
              error={Boolean(errors.image) && touched.image && errors.image}
              setValue={(x: any) => setFieldValue("image", x)}
              value={values.image}
            />

            <TextAreaInput
              className="w-full "
              id="description"
              label="Description"
              value={values.description}
              onChange={handleChange}
              error={
                Boolean(errors.description) &&
                touched.description &&
                errors.description
              }
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

export default ArticleForm;
