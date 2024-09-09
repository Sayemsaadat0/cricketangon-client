"use client";
import { photosDummydata } from '@/data/dummy.data';
import Image from 'next/image';
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
                            onContextMenu={handleContextMenu} // Disables right-click context menu
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
        <div>
            <MasonaryPhoto breakpointColumnsObj={breakpointColumnsObj} />
        </div>
    );
};

export default PhotosPageContainer;
