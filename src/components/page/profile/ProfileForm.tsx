"use client"
import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/core/inputs/TextInput';
import Button from '@/components/core/button/Button';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';
import ImgUploadField from '@/components/core/inputs/ImgUploadField';

// Validation schema
// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().required('Email is required'),
//   password: Yup.string().required('Password is required'),
//   confirm_password: Yup.string().required('Password is required'),
// });

type profileType = {
  instance?: any;
  handleDataSubmit: Function;
};


const ProfileForm: FC<profileType> = ({ instance, handleDataSubmit }) => {

  const {
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    // resetForm,
  } = useFormik({
    initialValues: {
      username: instance?.username || "",
      email: instance?.email || "",
      thumbnail: instance?.thumbnail || "",
    },
    onSubmit: async (data: any) => {
      try {
        let form_data = new FormData();
        form_data.append("username ", data.username);
        form_data.append("email", data.email);
        if (data?.thumbnail?.name) {
          form_data.append("thumbnail", data.thumbnail);
        }
        await handleDataSubmit(form_data);
        // resetForm();
        if (instance) {
          toast({
            variant: 'default',
            description: 'Data Edited Successfully!',
          });
        } else {
          toast({
            variant: 'default',
            description: 'Congratulations! New Added Successfully.',
          });
        }
      } catch (err: any) {
        for (const key of err.errors) {
          console.log(key);
          toast({
            variant: 'destructive',
            description: `${key?.attr} - ${key?.detail}`,
          });
        }
      }
    },
  });

  
  console.log(values)
  console.log(errors)


  return (
    <div>
      <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div >
            <ImgUploadField
              // width={150}
              // height={150}
              error={Boolean(errors.thumbnail) && touched.thumbnail && errors.thumbnail}
              setValue={(x: any) => setFieldValue('thumbnail', x)}
              value={values.thumbnail}
            />
          </div>
          <div className='w-full space-y-6'>
            <div className='space-y-3'>
              <p>Your Name</p>
              <TextInput
                className="w-full md:w-[40%]"
                id="username"
                placeholder="Enter your full Name"
                value={values.username}
                onChange={handleChange}
                type="text"
                error={
                  Boolean(errors.username) &&
                  touched.username &&
                  errors.username
                }
              />
            </div>

            <div className='space-y-3'>
              <p>Your Email</p>
              <TextInput
                className="w-full md:w-[40%]"
                id="email"
                placeholder="Enter Your Email"
                value={values.email}
                onChange={handleChange}
                type="text"
                error={
                  Boolean(errors.email) &&
                  touched.email &&
                  errors.email
                }
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <Button
            disabled={isSubmitting}
            className="w-auto"
            variant={'regulerBtn'}
            label="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
