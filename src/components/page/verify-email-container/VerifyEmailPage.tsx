"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/core/inputs/TextInput";
import Button from "@/components/core/button/Button";
import { useRouter } from "next/navigation";
import useEmailStore from "@/store/useEmailStore";
import axios from "axios";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

const VerifyEmailPage = () => {
  const { setEmail } = useEmailStore();
  const router = useRouter();
  const { handleChange, values, touched, errors, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema,
      onSubmit: async (data) => {
        try {
          // Send OTP to the email using Axios
          setEmail(data?.email);

          
          const response = await axios.post("http://localhost:5000/api/v1/auth/verify-email", {
            email: data.email,
          });

          // Check response status or any specific logic
          // console.log('response.data', response);

          // Save the email in the store and navigate to OTP verification page
          router.push("/verify-otp");
        } catch (err) {
          // Handle error (e.g., display an error message)
          console.error("Error sending OTP:", err);
        }
      },
    });

  return (
    <div className="bg-white rounded-[12px] p-5 md:p-10 space-y-5">
      <h3 className="text-xl font-semibold text-center">Email Confirmation</h3>
      <p className="text-center">Please enter your email for verification</p>
      <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
        <TextInput
          className="w-full"
          id="email"
          label="Enter Your Email"
          value={values.email}
          onChange={handleChange}
          type="email"
          error={Boolean(errors.email) && touched.email && errors.email}
        />
        <div className="w-full flex justify-center">
          <Button
            disabled={isSubmitting}
            className="w-full md:w-[80%]"
            variant={"regulerBtn"}
            label="Send Verification Code"
          />
        </div>
      </form>
    </div>
  );
};

export default VerifyEmailPage;
