"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/core/button/Button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

const validationSchema = Yup.object({
    otp: Yup.string().required('OTP is required').length(6, 'OTP must be exactly 6 digits'),
});

const VerifyOtpContainer = () => {

    const {
        values,
        touched,
        errors,
        resetForm,
        handleSubmit,
        setFieldValue,
        isSubmitting,
    } = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema,
        onSubmit: async (data) => {
            try {
                console.log('data', data);  
                resetForm();
            } catch (err) {
                console.log(err);
            }
        },
    });

    const handleOtpChange = (value: string) => {
        setFieldValue('otp', value);
    };


    return (
        <div className='bg-white rounded-[12px] p-5 md:p-10 w-fit space-y-3'>
            <h3 className='text-xl font-semibold '>Enter the verification code</h3>
            <p className=''>We Have Sent you a 6 digit otp code to your email</p>
            <form className="pt-2" autoComplete="off" onSubmit={handleSubmit}>
                <p className='text-xs py-3 text-c-white-700'>Code</p>
                <div>
                    <InputOTP maxLength={6} value={values?.otp} onChange={handleOtpChange}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    {touched.otp && errors.otp && <p className="text-red-500">{errors.otp}</p>}
                    <p className='text-xs py-3 text-c-white-700'>Send code again in  1:45 s</p>
                </div>
                <div className='w-full mt-5'>
                    <Button
                        type='submit'
                        disabled={isSubmitting}
                        className="w-full"
                        variant={'regulerBtn'}
                        label="Send Verification Code"
                    />
                </div>
            </form>
        </div>
    );
};

export default VerifyOtpContainer;
