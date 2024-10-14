"use client";
import HomeContainer from '@/components/page/home/HomeContainer';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {



  return (
    <div className='home_bg flex items-center  justify-center'>
      <HomeContainer />
    </div>
  );
};

export default Page;
