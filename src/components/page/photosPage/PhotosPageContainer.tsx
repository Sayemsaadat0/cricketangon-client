"use client";
import { photosDummydata } from '@/data/dummy.data';
import { useGetPhotos } from '@/hooks/photo.hooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import Masonry from 'react-masonry-css';







// Moments
type MomentsGalaryType = {
    breakpointColumnsObj: any;
};

const MomentsGalary: FC<MomentsGalaryType> = ({ breakpointColumnsObj }) => {
    const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    return (
        <div className='space-y-3'>
            <div className='text-xl text-c-violet-600 font-semibold'>
                Cricketangon Special Moments
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {photosDummydata.map((image) => (
                    <div key={Math.random()} className="relative">
                        <Image
                            src={image}
                            alt={`Placeholder`}
                            width={390}
                            height={400}
                            layout="responsive"
                            className="rounded-[20px] object-cover"
                            onContextMenu={handleContextMenu}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};






// General
type GeneralPhotoGalaryType = {
    breakpointColumnsObj: any;
    data: any
};

const GeneralPhotoGalary: FC<GeneralPhotoGalaryType> = ({ breakpointColumnsObj, data }) => {
    const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    return (
        <div className='space-y-3'>
            <div className='text-xl text-c-violet-600 font-semibold'>
                General
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data && data.map((i: any) => (
                    <div key={Math.random()} className="relative">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${i?.image}`}
                            alt={`Placeholder`}
                            width={390}
                            height={400}
                            layout="responsive"
                            className="rounded-[20px] object-cover"
                            onContextMenu={handleContextMenu}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

// Default Component
const PhotosPageContainer = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };

    const [activeTab, setActiveTab] = useState('general')
    const { data, isLoading } = useGetPhotos();
    return (
        <div className='space-y-2'>
            <div className='flex items-center gap-1'>
                <div>
                    <Link className='text-gray-500' href={'/'}>
                        Home
                    </Link> /
                </div>
                <div>
                    <Link className='font-bold' href={'/photoes'}>
                        Photos
                    </Link>
                </div>
            </div>
            <div className='text-xl text-c-violet-600 font-semibold'>
                Photos
            </div>

            {/* className='block lg:hidden' */}
            <div className='block lg:hidden'>
                <div className='space-x-3'>
                    <button className={`${activeTab === 'general' ? 'text-white bg-purple-600 px-3 py-1 rounded-full' : 'text-gray-500 bg-gray-200 px-2 py-1 rounded-full'}`} onClick={() => setActiveTab('general')}>General</button>
                    <button className={`${activeTab === 'moments' ? 'text-white bg-purple-600 px-3 py-1 rounded-full' : 'text-gray-500 bg-gray-300 px-2 py-1 rounded-full'}`} onClick={() => setActiveTab('moments')}>Moments</button>
                </div>

                {
                    activeTab === 'general' && <div>
                        <GeneralPhotoGalary data={data?.data?.data || []} breakpointColumnsObj={breakpointColumnsObj} />
                    </div>
                }
                {
                    activeTab === 'moments' && <div>
                        <MomentsGalary breakpointColumnsObj={breakpointColumnsObj} />
                    </div>
                }
            </div>
            <div className='flex gap-10'>
                <GeneralPhotoGalary data={data?.data?.data || []} breakpointColumnsObj={breakpointColumnsObj} />
                <MomentsGalary breakpointColumnsObj={breakpointColumnsObj} />
            </div>
        </div>
    );
};

export default PhotosPageContainer;
