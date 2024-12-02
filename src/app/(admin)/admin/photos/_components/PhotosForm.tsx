"use client"
import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import TextInput from '@/components/core/inputs/TextInput';
import Button from '@/components/core/button/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import ImgUploadField from '@/components/core/inputs/ImgUploadField';
import { ArticleAddEditFormValidation } from '@/lib/validations/article.validate';
import { articleCategoryData } from '@/data/dummy.data';
import { TextAreaInput } from '@/components/core/inputs/TextAreaInput';
import EditIcon from '@/components/core/icons/dashboard/EditIcon';




type PhotosFormType = {
    handleFormSubmit: Function,
    instance?: any
}


const PhotosForm: FC<PhotosFormType> = ({ instance, handleFormSubmit }) => {
    const [open, setOpen] = useState(false)
    // setFieldValue,
    const { handleChange, values, touched, errors, handleSubmit, isSubmitting, resetForm, setFieldValue } = useFormik(
        {
            initialValues: {
                image: instance?.image || "",
            },

            validationSchema: ArticleAddEditFormValidation,
            onSubmit: async (data: any) => {
                try {
                    let form_data = new FormData();;
                    if (data?.image?.name) {
                        form_data.append("image", data.image);
                    }
                    await handleFormSubmit(form_data);
                    resetForm();
                    setOpen(!open)
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
        }
    );

    console.log(values)

    return (
        <div className=' rounded-[12px]'>
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                {
                    instance ? <div onClick={() => setOpen(!open)} className="border border-green-500 bg-green-100 text-green-800  cursor-pointer flex items-center justify-center p-2.5  rounded-full w-fit">
                        <EditIcon />
                    </div> : <div onClick={() => setOpen(!open)}>
                        <div className="hidden lg:block p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
                            <Button
                                className=""
                                variant="roundedOutlineBtn"
                                label="Create Stats"
                            />
                        </div>
                    </div>
                }

                <DialogContent className='max-h-[80%] overflow-auto'>
                    <DialogHeader>
                        <DialogTitle>Add New Stats</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>

                    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
                        

                        <ImgUploadField
                            width={150}
                            height={150}
                            error={Boolean(errors.image) && touched.image && errors.image}
                            setValue={(x: any) => setFieldValue('image', x)}
                            value={values.image}
                        />

                        

                        <div className='w-full flex justify-center'>
                            <Button
                                disabled={isSubmitting}
                                className="w-full"
                                variant={'regulerBtn'}
                                label={isSubmitting ? 'Publishing..' : 'Publish'}
                            />
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PhotosForm;

