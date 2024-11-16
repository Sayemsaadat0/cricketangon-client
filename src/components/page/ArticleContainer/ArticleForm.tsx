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




type ArticleFormType = {
    handleFormSubmit: Function,
    instance?: any
}


const ArticleForm: FC<ArticleFormType> = ({ instance, handleFormSubmit }) => {
    const [open, setOpen] = useState(false)
    // setFieldValue,
    const { handleChange, values, touched, errors, handleSubmit, isSubmitting, resetForm, setFieldValue } = useFormik(
        {
            initialValues: {
                author_name: instance?.author_name || "",
                title: instance?.title || "",
                category: instance?.category || "",
                image: instance?.image || "",
                description: instance?.description || "",
            },

            validationSchema: ArticleAddEditFormValidation,
            onSubmit: async (data: any) => {
                try {
                    let form_data = new FormData();

                    form_data.append("author_name", data.author_name);
                    form_data.append("title", data.title);
                    form_data.append("category", data.category);
                    form_data.append("description", data.description);

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
                    instance ? <div onClick={() => setOpen(!open)} className="cursor-pointer flex gap-2 p-2  w-full items-center">
                        <EditIcon /> <span>Edit</span>
                    </div> : <div onClick={() => setOpen(!open)}>
                        <div className="hidden lg:block p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
                            <Button
                                className=""
                                variant="roundedOutlineBtn"
                                label="Add Article"
                            />
                        </div>
                    </div>
                }

                <DialogContent className='max-h-[80%] overflow-auto'>
                    <DialogHeader>
                        <DialogTitle>Add New Article</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>

                    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
                        <TextInput
                            className="w-full"
                            id="author_name"
                            label="Enter Author Name"
                            value={values.author_name}
                            onChange={handleChange}
                            type="text"
                            error={
                                Boolean(errors.author_name) &&
                                touched.author_name &&
                                errors.author_name
                            }
                        />

                        <TextInput
                            className="w-full"
                            id="title"
                            label="Article Title"
                            value={values.title}
                            onChange={handleChange}
                            type="text"
                            error={
                                Boolean(errors.title) &&
                                touched.title &&
                                errors.title
                            }
                        />


                        <div>
                            <select
                                id="category"
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                                className="py-2 px-3 md:px-[30px] md:py-[14px] border border-c-white-600 no-arrow w-full  rounded-[10px] outline-none bg-inherit text-[14px] bg-white m-0 placeholder-text-oc-white-800 text-oc-primary-1-900"
                            >
                                <option className="" value="" disabled>
                                    Select Category
                                </option>
                                {articleCategoryData.map((c: any) => (
                                    <option
                                        className="text-oc-white-900"
                                        key={c.id}
                                        value={c.category}
                                    >
                                        {c.category}
                                    </option>
                                ))}
                            </select>
                            {Boolean(errors.category) && touched.category && (
                                <div className="text-red-500 text-sm">
                                    {typeof errors.category === "string" && errors?.category}
                                </div>
                            )}
                        </div>

                        <ImgUploadField
                            width={150}
                            height={150}
                            error={Boolean(errors.image) && touched.image && errors.image}
                            setValue={(x: any) => setFieldValue('image', x)}
                            value={values.image}
                        />

                        <TextAreaInput
                            className="w-full "
                            id="description"
                            label="Description"
                            value={values.description}
                            onChange={handleChange}

                            error={
                                Boolean(errors.description) &&
                                touched.description &&
                                errors.description
                            }
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

export default ArticleForm;

