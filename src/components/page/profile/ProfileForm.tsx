"use client";

import { FC } from "react";
import { useFormik } from "formik";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import ImgUploadField from "@/components/core/inputs/ImgUploadField";
import { TextAreaInput } from "@/components/core/inputs/TextAreaInput";
import { useAuth } from "@/context/AuthContext";
import { useUpdateUser } from "@/hooks/users.hooks";

type ProfileFormType = {
  instance?: {
    name: string;
    email: string;
    image: string;
    address: string;
  };
};

const ProfileForm: FC<ProfileFormType> = ({ instance }) => {
  const { user } = useAuth();
  const { mutateAsync } = useUpdateUser(user?.id)

  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: instance?.name || "",
      email: instance?.email || "",
      image: instance?.image
        ? instance.image.startsWith("http")
          ? instance.image
          : `${process.env.NEXT_PUBLIC_IMAGE_URL}${instance.image}`
        : "",
      address: instance?.address || "",
    },
    onSubmit: async (data: any) => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("address", data.address);

        if (data.image instanceof File) {
          formData.append("image", data.image);
        } else if (data.image) {
          const imageUrl = data.image.startsWith("http")
            ? data.image.replace(process.env.NEXT_PUBLIC_IMAGE_URL, "")
            : data.image;
          formData.append("image", imageUrl);
        }
        if (instance) {
         const response =  await mutateAsync(formData)
         return console.log(response)
        }
        // Handle the API call with formData here.
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
  });

  console.log(values)
  console.log(instance)


  return (
    <div className="rounded-[12px]">
      <form
        className="space-y-6"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="md:flex space-y-3 md:space-y-0 gap-5 items-center">
          <div>
            <ImgUploadField
              error={Boolean(errors.image) && touched.image && errors.image}
              setValue={(x: any) => setFieldValue("image", x)}
              value={values.image}
            />
          </div>
          <div className="md:w-[60%] space-y-1">
            <TextInput
              className="w-full"
              id="name"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={handleChange}
              type="text"
              error={Boolean(errors.name) && touched.name && errors.name}
            />

            <TextInput
              className="w-full"
              id="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              type="text"
              error={Boolean(errors.email) && touched.email && errors.email}
            />

            <TextAreaInput
              className="w-full"
              id="address"
              placeholder="Enter Your Address"
              value={values.address}
              onChange={handleChange}
              error={Boolean(errors.address) && touched.address && errors.address}
            />
          </div>
        </div>
        <div className="">
          <Button
            type="submit"
            disabled={isSubmitting || !user?.id}
            className=""
            variant={"regulerBtn"}
            label={isSubmitting ? "Saving.." : "Save"}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
