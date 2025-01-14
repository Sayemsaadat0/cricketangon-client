"use client";

import Button from "@/components/core/button/Button";
import ImgUploadField from "@/components/core/inputs/ImgUploadField";
import TextInput from "@/components/core/inputs/TextInput";
import { toast } from "@/hooks/use-toast";
import { useUpdateUser } from "@/hooks/users.hooks";
import { useFormik } from "formik";
import { FC } from "react";

type ProfileType = {
  instance?: {
    name: string;
    email: string;
    image: string;
    [key: string]: any;
  };
  handleDataSubmit?: Function;
};

const ProfileForm: FC<ProfileType> = ({ instance, handleDataSubmit }) => {
  const { mutateAsync } = useUpdateUser(instance?.id);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      image: "",
    },
    onSubmit: async (data) => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);

        if (data.image) {
          formData.append("image", data.image);
        }

        await mutateAsync(formData);
        toast({
          variant: "default",
          description: instance
            ? "Profile Updated Successfully!"
            : "Profile Created Successfully!",
        });

        if (handleDataSubmit) {
          handleDataSubmit();
        }
      } catch (err: any) {
        if (Array.isArray(err.errors)) {
          err.errors.forEach((error: any) => {
            toast({
              variant: "destructive",
              description: `${error?.attr} - ${error?.detail}`,
            });
          });
        } else {
          toast({
            variant: "destructive",
            description: "An error occurred while updating the profile",
          });
        }
      }
    },
  });



  return (
    <div>
      <form
        className="space-y-6"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div>
            <ImgUploadField
              // error={Boolean(errors.image && touched.image)}
              setValue={(x: any) => formik.setFieldValue("image", x)}
              value={formik.values.image}
            />
          </div>
          <div className="w-full space-y-6">
            <div className="space-y-3">
              <p>Your Name</p>
              <TextInput
                className="w-full md:w-[40%]"
                id="name"
                name="name"
                placeholder="Enter your full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.name && formik.touched.name)}
              />
            </div>
            <div className="space-y-3">
              <p>Your Email</p>
              <TextInput
                className="w-full md:w-[40%]"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="text"
                error={Boolean(formik.errors.email && formik.touched.email)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            disabled={formik.isSubmitting}
            className="w-auto"
            variant="regulerBtn"
            label="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
