"use client";
import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/core/inputs/TextInput';
import Button from '@/components/core/button/Button';
import { toast } from '@/hooks/use-toast';

type ProfileType = {
  handleDataSubmit: Function;
};

const ChangePasswordForm: FC<ProfileType> = ({ handleDataSubmit }) => {
  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old password is required"),
      newPassword: Yup.string()
        .required("New password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required("Please confirm your new password"),
    }),
    onSubmit: async (data) => {
      try {
        // Only pass oldPassword and newPassword to handleDataSubmit
        await handleDataSubmit({
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        });
        toast({
          variant: 'default',
          description: 'Password updated successfully!',
        });
      } catch (err: any) {
        toast({
          variant: 'destructive',
          description: 'Failed to update password. Please try again.',
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
            error={Boolean(errors.oldPassword) && touched.oldPassword && errors.oldPassword}
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
            error={Boolean(errors.newPassword) && touched.newPassword && errors.newPassword}
          />
        </div>
        <div className="space-y-3">
          <p>Confirm New Password</p>
          <TextInput
            id="confirmNewPassword"
            placeholder="Confirm your new password"
            value={values.confirmNewPassword}
            onChange={handleChange}
            type="password"
            error={
              Boolean(errors.confirmNewPassword) &&
              touched.confirmNewPassword &&
              errors.confirmNewPassword
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
