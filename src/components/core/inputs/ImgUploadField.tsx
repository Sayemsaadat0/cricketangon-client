'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ImgUploadIcon from '../icons/dashboard/ImgUploadIcon';
import { getImgToB64 } from '@/lib/getImageToB64';
import ChangeIcon from '../icons/dashboard/ChangeIcon';

interface ImgUploadFieldProps {
    width?: number; // Specify width as an optional number
    height?: number; // Specify height as an optional number
    setValue?: any; // Function to set the value (the uploaded file)
    error?: any; // Optional error message
    value?: string | null; // URL or path of the existing image
    id?: string; // URL or path of the existing image
}

const ImgUploadField: React.FC<ImgUploadFieldProps> = ({
    width,
    height,
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
        <div className={`border-2 border-dashed border-c-white-600 rounded-[15px] min-w-[250px] min-h-[250px] py-10 
        `}>
            <label className="relative" htmlFor={`dropzone-file-${id}`}>
                <div className="flex w-full mx-auto items-center justify-center max-w-[800px] px-4 max-h-[300px]">
                    <div className="flex items-center justify-center max-w-[500px] object-cover mx-auto">
                        {value && !prevImg && (
                            <div className="p-4 mx-auto relative rounded-[15px] max-h-[300px]">
                                <Image
                                    className="object-contain min-w-[350px] shrink-0 w-full rounded-[15px] max-h-[300px]"
                                    src={value}
                                    width={500}
                                    height={300}
                                    alt="icon img upload"
                                />
                                <span className="text-black  cursor-pointer transition-all absolute z-20 rounded-[8px] bg-white p-2 top-8 right-8 flex items-center gap-2">
                                    <ChangeIcon />
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-center max-w-[500px] object-cover mx-auto">
                    {prevImg && (
                        <div className="p-4 mx-auto relative rounded-[15px] max-h-[300px]">
                            <Image
                                className="object-contain w-full rounded-[15px] max-h-[300px]"
                                src={prevImg}
                                width={500}
                                height={300}
                                alt="icon"
                            />
                            <span className="text-black cursor-pointer  transition-all absolute z-20 rounded-[8px] bg-oc-primary-2-100 p-2 top-8 right-8 flex items-center gap-2">
                                <ChangeIcon size={'32'} />
                            </span>
                        </div>
                    )}
                </div>

                {!prevImg && !value && (
                    <div className="flex flex-col items-center justify-center cursor-pointer space-y-4 bg-white mx-4 rounded-[10px] py-10">
                        <div>
                            <ImgUploadIcon size={'80'} />
                        </div>
                        <p className="mb-2 text-center border p-1 border-oc-primary-1-500 rounded-[5px]">
                            <span>Click to upload</span>
                        </p>
                        <p className="text-xs text-center">SVG, PNG, JPG, Webp, or GIF</p>
                        <p className="mb-2 text-sm text-center hidden">
                            Image Sizes : width: {width} x height : {height}
                        </p>
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
