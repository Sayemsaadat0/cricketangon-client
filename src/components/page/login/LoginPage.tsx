"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import Cookies from "js-cookie";
import Link from "next/link";
import { useLogin } from "@/hooks/auth.hook";
// import { useStoreUser } from "@/stores/useStoreUser";
// import { useRouter } from "next";
import { useStoreUser } from "@/store/useStoreUser";
import { useRouter } from "next/navigation";
import useStoreLoginUserId from "@/store/useStoreLoginUserId";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const { mutateAsync } = useLogin(); // Handles API request
  // const setUser = useStoreUser((state) => state.setUser); // Zustand store
  const router = useRouter();
  const { id } = useStoreLoginUserId();
  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        const result = await mutateAsync(data);
        // return console?.log(result);

        if (result?.success) {
          Cookies.set("accessToken", result?.data?.accessToken, {
            expires: 7, // Cookie expiry in days
            // secure: process.env.NODE_ENV === "production", // Secure only in production
            sameSite: "Strict", // Protect from CSRF
          });

          if (Cookies?.get("role") !== "admin") {
            
          }

          // resetForm();
        }

        // Optionally navigate the user
        // router.push("/dashboard");
      } catch (err: any) {
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
  });
  console.log(id);
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
            <p>Remember Me</p>
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
            label={isSubmitting ? "Logging in..." : "Log in"}
          />
        </div>
      </form>
      <div className="text-center">
        Don’t have an account?{" "}
        <Link className="text-c-violet-700 font-bold" href={"signup"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
