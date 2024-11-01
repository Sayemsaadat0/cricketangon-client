'use client';

// import Button from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import ImgUploadIcon from '../icons/dashboard/ImgUploadIcon';
import ChangeIcon from '../icons/dashboard/ChangeIcon';
import { getImgToB64 } from '@/lib/getImageToB64';

interface ImgUploadFieldProps {
    width?: number; // Specify width as an optional number
    height?: number; // Specify height as an optional number
    setValue?: any; // Function to set the value (the uploaded file)
    error?: any; // Optional error message
    value?: string | null; // URL or path of the existing image
    id?: string; // URL or path of the existing image
}

const ImgUploadField: React.FC<ImgUploadFieldProps> = ({
    setValue,
    error,
    value,
    id
}) => {
    const [prevImg, setPrevImg] = useState<string | null>(null); // State to hold the base64 image string

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.files && e.target.files[0]) {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                    setValue(selectedFile);
                    const imgBase64 = await getImgToB64(selectedFile);
                    setPrevImg(imgBase64);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={`border  rounded-full 
         max-w-[200px] max-h-[200px] w-fit`}>
            <label className="relative" htmlFor={`dropzone-file-${id}`}>
                <div className="flex w-full mx-auto items-center justify-center max-w-[150px]  max-h-[150px]">
                    <div className="flex items-center justify-center max-w-[500px] object-cover mx-auto">
                        {value && !prevImg && (
                            <div className=" mx-auto relative rounded-full min-w-[150px] max-h-[300px]">
                                <Image
                                    className="object-contain shrink-0 w-full rounded-full max-h-[300px]"
                                    src={value}
                                    width={100}
                                    height={100}
                                    alt="icon img upload"
                                />
                                <span className="text-white  cursor-pointer  transition-all absolute z-20 rounded-[8px] bg-c-violet-500 p-2 top-4 right-0 flex items-center gap-2">
                                    <ChangeIcon />
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-center max-w-[150px] object-cover mx-auto">
                    {prevImg && (
                        <div className="mx-auto relative rounded-full w-[150px] h-[150x]">
                            <Image
                                className="object-contain  rounded-full"
                                src={prevImg}
                                width={150}
                                height={150}
                                alt="icon"
                            />
                            <span className="text-white cursor-pointer bg-c-violet-500 transition-all absolute z-20 rounded-[8px] p-2 top-3 right-0 flex items-center gap-2">
                                <ChangeIcon  />
                            </span>
                        </div>
                    )}
                </div>

                {!prevImg && !value && (
                    <div className="p-10 cursor-pointer  rounded-[10px] ">
                            <ImgUploadIcon size={'80'} />
                    </div>
                )}

                <input
                    onChange={handleFileChange}
                    name="file"
                    id={`dropzone-file-${id}`}
                    type="file"
                    accept="image/*"
                    className="hidden "
                />
            </label>
            {error && <p className="text-red-400 mt-6 text-center">{error}</p>}
        </div>
    );
};

export default ImgUploadField;
