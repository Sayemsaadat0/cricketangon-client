"use client";
import Button from "@/components/core/button/Button";
import TextInput from "@/components/core/inputs/TextInput";
import { toast } from "@/hooks/use-toast";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

type ProfileType = {
  handleDataSubmit: Function;
};

const ChangePasswordForm: FC<ProfileType> = ({ handleDataSubmit }) => {
  const { handleChange, values, touched, errors, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        oldPassword: "",
        newPassword: "",
        confirm_password: "",
      },
      validationSchema: Yup.object({
        oldPassword: Yup.string().required("Old password is required"),
        newPassword: Yup.string()
          .required("New password is required")
          .min(8, "Password must be at least 8 characters"),
        confirm_password: Yup.string()
          .required("Confirm password is required")
          .oneOf([Yup.ref('newPassword')], "Passwords must match")
          .min(8, "Password must be at least 8 characters"),
      }),
      onSubmit: async (data) => {
        console.log(data);
        try {
          // Only pass oldPassword and newPassword to handleDataSubmit
          await handleDataSubmit(data);
          toast({
            variant: "default",
            description: "Password updated successfully!",
          });
        } catch (err: any) {
          toast({
            variant: "destructive",
            description: "Failed to update password. Please try again.",
          });
        }
      },
    });

  return (
    <div>
      <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <p>Current Password</p>
          <TextInput
            className="w-full sm:w-1/2 border-[#DFEAF2]"
            id="oldPassword"
            placeholder="Enter your old password"
            value={values.oldPassword}
            onChange={handleChange}
            type="password"
            error={
              Boolean(errors.oldPassword) &&
              touched.oldPassword &&
              errors.oldPassword
            }
          />
        </div>
        <div className="space-y-3">
          <p>New Password</p>
          <TextInput
            className="w-full sm:w-1/2 border-[#DFEAF2]"
            id="newPassword"
            placeholder="Enter your new password"
            value={values.newPassword}
            onChange={handleChange}
            type="password"
            error={
              Boolean(errors.newPassword) &&
              touched.newPassword &&
              errors.newPassword
            }
          />
        </div>
        <div className="space-y-3">
          <p>Confirm Password</p>
          <TextInput
            className="w-full sm:w-1/2 border-[#DFEAF2]"
            id="confirm_password"
            placeholder="Enter your old password"
            value={values.confirm_password}
            onChange={handleChange}
            type="password"
            error={
              Boolean(errors.confirm_password) &&
              touched.confirm_password &&
              errors.confirm_password
            }
          />
        </div>

        <div className="w-full flex sm:justify-end">
          <Button
            disabled={isSubmitting}
            className="w-36"
            variant="regulerBtn"
            label="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
