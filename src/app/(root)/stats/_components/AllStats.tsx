"use client";
import StatsCard from '@/components/core/cards/StatsCard';
import { articleCategoryData, articlesData } from '@/data/dummy.data';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import Masonry from 'react-masonry-css';

const AllStats: FC = () => {

    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
        500: 1,
    };


    return (
        <div className='space-y-2'>

            <div >
                <div >
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {articlesData.map((i) => (
                            <div key={Math.random()} >
                                <StatsCard id={i.id} image={i?.image} title={i?.title} description={i?.description} />
                            </div>
                        ))}
                    </Masonry>
                </div>

            </div>
        </div>
    );
};

export default AllStats;


