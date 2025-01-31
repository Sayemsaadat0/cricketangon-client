"use client";
import Cookies from "js-cookie";

import { FC } from "react";
import { useFormik } from "formik";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import ImgUploadField from "@/components/core/inputs/ImgUploadField";
import { TextAreaInput } from "@/components/core/inputs/TextAreaInput";
import { useAuth } from "@/context/AuthContext";
import { useUpdateUser } from "@/hooks/users.hooks";
import { useStoreUser } from "@/store/useStoreUser";

type ProfileFormType = {
  instance?: {
    name: string;
    email: string;
    image: string;
    address: string;
  };
};

const ProfileForm: FC<ProfileFormType> = ({ instance }) => {
  const { user, loading } = useAuth();
  const { user: storedUser, setUser } = useStoreUser()
  const { mutateAsync } = useUpdateUser(storedUser?.id || null)

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
    enableReinitialize: true,
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
          const response = await mutateAsync(formData)
          if (response?.statusCode !== 200) {
            // console.log('erroa')
          } else {
            // setUser( response.data)
            Cookies.set("authUser", JSON.stringify(response.data), { expires: 7 });

            // console.log('user updated')
          }


          return console.log('response', response)
        }
        // Handle the API call with formData here.
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
  });


  if (loading) {
    return <div className="flex items-center justify-center text-center py-10 w-full">Loading..</div>

  }

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
