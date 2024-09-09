"use client";
import React, { useEffect } from 'react';

const Page = () => {

  useEffect(() => {
    const div1 = document.querySelector('.div1') as HTMLElement;
    const div2 = document.querySelector('.div2') as HTMLElement;

    div1.addEventListener('mouseenter', () => {
      div1.style.height = '384px ';
      div2.style.height = '192px';
    });

    div1.addEventListener('mouseleave', () => {
      div1.style.height = '288px';
      div2.style.height = '288px ';
    });


    div2.addEventListener('mouseenter', () => {
      div2.style.height = '384px ';
      div1.style.height = '192px';
    });

    div2.addEventListener('mouseleave', () => {
      div2.style.height = '288px';
      div1.style.height = '288px';
    });
    return () => {
      div1.removeEventListener('mouseenter', () => { });
      div1.removeEventListener('mouseleave', () => { });
      div2.removeEventListener('mouseenter', () => { });
      div2.removeEventListener('mouseleave', () => { });
    };
  }, []);

  return (
    <div className='home_bg flex items-center justify-center'>
    <div className='crick-Container min-h-[calc(100vh-200px)]  w-full border'>
      <section className="flex justify-between gap-10 w-full ">
        <div className="space-y-10">
          <div className="w-60 h-72  row-span-2 bg-amber-400 div1 transition-all duration-300 bounce-effect"></div>
          <div className="w-60 h-72  bg-cyan-400 div2 transition-all duration-300 bounce-effect"></div>
        </div>
        <div className="space-y-10">
          <div className="w-60 h-96 row-span-2 bg-purple-400"></div>
          <div className="w-60 h-48 bg-yellow-400"></div>
        </div>
        <div className="space-y-10">
          <div className="w-60 h-44 bg-cyan-500"></div>
          <div className="w-60 h-44 bg-blue-600"></div>
          <div className="w-60 h-44 bg-rose-500"></div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Page;
