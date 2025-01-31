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
      },
      validationSchema: Yup.object({
        oldPassword: Yup.string().required("Old password is required"),
        newPassword: Yup.string()
          .required("New password is required")
          .min(8, "Password must be at least 8 characters"),
      }),
      onSubmit: async (data) => {
        // console.log(data);
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
          <p>Old Password</p>
          <TextInput
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

        <div className="w-full flex justify-end">
          <Button
            disabled={isSubmitting}
            className="w-auto"
            variant="regulerBtn"
            label="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
