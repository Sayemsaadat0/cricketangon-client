"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import Link from "next/link";
import { useSignup } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
// import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().required("Password is required"),
});

const SignupPage = () => {
  const { mutateAsync: handleSignupFn } = useSignup();
  const router = useRouter();

  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    resetForm,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
      confirm_password: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      if (data.password !== data.confirm_password) {
        // alert("Passwords do not match!");
        toast({
          variant: "destructive",
          description: `Both Password Must be Same!`,
        });
        return;
      }
      try {
        const result = await handleSignupFn(data);
        // console.log(result?.message);
        if (result?.success === false) {
          alert(result?.message);
          toast({
            variant: "destructive",
            description: result?.message,
          });
        }
        // console.log(result);
        if (result?.success === true) {
          router.push("/login");
          toast({
            variant: "destructive",
            description: `Both Password Must be Same!`,
          });
        }
        resetForm();
      } catch (err: any) {
        toast({
          variant: "destructive",
          description: err?.message || "",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-white rounded-[12px] p-5 md:p-10 space-y-5">
      <h3 className="text-xl font-semibold text-center">Sign up to Account</h3>
      <p className="text-center">Please enter your details to continue</p>
      <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
        <TextInput
          className="w-full"
          id="name"
          label="Enter your full name"
          value={values.name}
          onChange={handleChange}
          type="text"
          error={Boolean(errors.name) && touched.name && errors.name}
        />
        <TextInput
          className="w-full"
          id="email"
          label="Enter Your Email"
          value={values.email}
          onChange={handleChange}
          type="text"
          error={Boolean(errors.email) && touched.email && errors.email}
        />
        <TextInput
          className="w-full "
          id="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          type="password"
          error={
            Boolean(errors.password) && touched.password && errors.password
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
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-[80%]"
            variant={"regulerBtn"}
            label={isSubmitting ? "Signing up..." : "Sign up"}
          />
        </div>
      </form>
      <div className="text-center">
        Already have an account?{" "}
        <Link className="text-c-violet-700 font-bold" href={"/login"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
