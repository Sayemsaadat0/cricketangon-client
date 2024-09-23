"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/core/inputs/TextInput';
import Button from '@/components/core/button/Button';
import Link from 'next/link';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

// Validation schema
const validationSchema = Yup.object({
    otp: Yup.string().required('OTP is required').length(6, 'OTP must be exactly 6 digits'),
});

const VerifyOtpContainer = () => {
    const {
        setFieldValue,
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema,
        onSubmit: async (data) => {
            try {
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        },
    });

    // Handle OTP input and set it using setFieldValue
    const handleOtpChange = (value: string) => {
        setFieldValue('otp', value);
    };

    return (
        <div className='bg-white rounded-[12px] p-5 md:p-10 space-y-5'>
            <h3 className='text-xl font-semibold text-center'>Email Confirmation</h3>
            <p className='text-center'>Please enter your email for verification</p>
            <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <InputOTP maxLength={6} onChange={handleOtpChange}>
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
                </div>
                <div className='w-full flex justify-center'>
                    <Button 
                    type='submit'
                        disabled={isSubmitting}
                        className="w-full md:w-[80%]"
                        variant={'regulerBtn'}
                        label="Send Verification Code"
                    />
                </div>
            </form>
        </div>
    );
};

export default VerifyOtpContainer;
