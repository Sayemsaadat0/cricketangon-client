"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import Link from "next/link";
import useEmailStore from "@/store/useEmailStore";
import { useForgetPassword } from "@/hooks/auth.hook";
import { useRouter } from "next/router";

// Validation schema
const validationSchema = Yup.object({
  newPassword: Yup.string().required("Password is required"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

const ForgetPasswordContainer = () => {
  const { email } = useEmailStore();
  const { mutateAsync } = useForgetPassword();
  const router = useRouter();

  const { handleChange, values, touched, errors, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: email,
        newPassword: "",
        confirm_password: "",
      },
      validationSchema,
      onSubmit: async (data) => {
        try {
          await mutateAsync(data);
          router.push("/login");

          //   console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
    });

  console.log(values);
  console.log(errors);

  return (
    <div className="bg-white rounded-[12px] p-5 md:p-10 space-y-5">
      <h3 className="text-xl font-semibold text-center">
        Reset Password {email}
      </h3>
      {/* <p className='text-center'></p> */}
      <form className="space-y-20" autoComplete="off" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <TextInput
            className="w-full "
            id="newPassword"
            label="Password"
            value={values.newPassword}
            onChange={handleChange}
            type="password"
            error={
              Boolean(errors.newPassword) &&
              touched.newPassword &&
              errors.newPassword
            }
          />
          <TextInput
            className="w-full "
            id="confirm_password"
            label="Confirm Password"
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

        <div className="w-full flex justify-center ">
          <Button
            disabled={isSubmitting}
            className="w-full md:w-[80%]"
            variant={"regulerBtn"}
            label="Update Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordContainer;
