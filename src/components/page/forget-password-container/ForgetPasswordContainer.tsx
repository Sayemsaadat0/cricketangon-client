"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/core/inputs/TextInput';
import Button from '@/components/core/button/Button';
import Link from 'next/link';
import useEmailStore from '@/store/useEmailStore';

// Validation schema
const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().required('Password is required'),
});

const ForgetPasswordContainer = () => {
    const { email } = useEmailStore();

    const {
        handleChange,
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            password: '',
            confirm_password: '',
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

    console.log(values)

    return (
        <div className='bg-white rounded-[12px] p-5 md:p-10 space-y-5'>
            <h3 className='text-xl font-semibold text-center'>Reset Password {email}</h3>
            {/* <p className='text-center'></p> */}
            <form className="space-y-20" autoComplete="off" onSubmit={handleSubmit}>
                <div className='space-y-6'>
                    <TextInput
                        className="w-full "
                        id="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        error={
                            Boolean(errors.password) &&
                            touched.password &&
                            errors.password
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

                <div className='w-full flex justify-center '>
                    <Button
                        disabled={isSubmitting}
                        className="w-full md:w-[80%]"
                        variant={'regulerBtn'}
                        label="Update Password"
                    />
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordContainer;
