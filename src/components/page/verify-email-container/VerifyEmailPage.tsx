"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/core/inputs/TextInput';
import Button from '@/components/core/button/Button';
import Link from 'next/link';
import useEmailStore from '@/store/useEmailStore';
import { useRouter } from 'next/navigation';

// Validation schema
const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
});

const VerifyEmailPage = () => {
    const { setEmail } = useEmailStore();
    const router = useRouter(); 
    const {
        handleChange,
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validationSchema,
        onSubmit: async (data) => {
            try {
                console.log(data)
                setEmail(data?.email)
                router?.push('/verify-otp')
            } catch (err) {
                console.log(err)
            }
        },
    });

    return (
        <div className='bg-white rounded-[12px] p-5 md:p-10 space-y-5'>
            <h3 className='text-xl font-semibold text-center'>Email Confirmation</h3>
            <p className='text-center'>Please enter your email for verification</p>
            <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
                <TextInput
                    className="w-full"
                    id="email"
                    label="Enter Your Email"
                    value={values.email}
                    onChange={handleChange}
                    type="text"
                    error={
                        Boolean(errors.email) &&
                        touched.email &&
                        errors.email
                    }
                />
                <div className='w-full flex justify-center'>
                    <Button
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

export default VerifyEmailPage;
