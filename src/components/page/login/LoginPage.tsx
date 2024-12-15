"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import Link from "next/link";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const { handleChange, values, touched, errors, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (data) => {
        try {
          console.log(data);
          // Call Function Here
        } catch (err) {
          console.log(err);
        }
      },
    });

  console.log(values);

  return (
    <div className="bg-white rounded-[12px] p-5 md:p-10 space-y-5">
      <h3 className="text-xl font-semibold text-center">Sign in to Account</h3>
      <p className="text-center">
        Please enter your email and password to continue
      </p>
      <form
        className="space-y-6"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <TextInput
          className="w-full"
          id="email"
          label="Enter Your Email"
          value={values.email}
          onChange={handleChange}
          type="text"
          error={touched.email && errors.email}
        />
        {touched.email && errors.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        <div>
          <TextInput
            className="w-full "
            id="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            type="password"
            error={touched.password && errors.password}
          />
          {touched.password && errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}

          <div className="flex justify-between mt-2">
            <p>ss Remember Me</p>
            <Link
              href={"/verify-email"}
              className="hover:underline transition-all duration-300 underline-offset-4 font-semibold text-c-white-800"
            >
              Forget Password
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            disabled={isSubmitting}
            className="w-full md:w-[80%]"
            variant={"regulerBtn"}
            label="Log in"
          />
        </div>
      </form>
      <div className="text-center">
        Dont have An account?{" "}
        <Link className="text-c-violet-700 font-bold" href={"signup"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
