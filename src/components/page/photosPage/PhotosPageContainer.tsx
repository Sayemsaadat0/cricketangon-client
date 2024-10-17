"use client";
import { photosDummydata } from '@/data/dummy.data';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Masonry from 'react-masonry-css';

type MasonaryPhotoType = {
    breakpointColumnsObj: any;
};

const MasonaryPhoto: FC<MasonaryPhotoType> = ({ breakpointColumnsObj }) => {
    const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    return (
        <div>
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

// Default Component
const PhotosPageContainer = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };
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
            <MasonaryPhoto breakpointColumnsObj={breakpointColumnsObj} />
        </div>
    );
};

export default PhotosPageContainer;
