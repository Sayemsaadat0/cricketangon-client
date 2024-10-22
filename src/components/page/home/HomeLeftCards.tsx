

'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';

const HomeLeftCards = () => {

    useEffect(() => {
        const div1 = document.querySelector('.div1') as HTMLElement;
        const div2 = document.querySelector('.div2') as HTMLElement;
        const image1 = div1.querySelector('img') as HTMLElement;
        const image2 = div2.querySelector('img') as HTMLElement;

        div1.addEventListener('mouseenter', () => {
            div1.style.height = '600px';
            div2.style.height = '200px';
            image2.style.display = 'none'; // Hide image in div2
        });

        div1.addEventListener('mouseleave', () => {
            div1.style.height = '400px';
            div2.style.height = '400px';
            image2.style.display = 'block'; // Show image in div2
        });

        div2.addEventListener('mouseenter', () => {
            div2.style.height = '600px';
            div1.style.height = '200px';
            image1.style.display = 'none'; // Hide image in div1
        });

        div2.addEventListener('mouseleave', () => {
            div2.style.height = '400px';
            div1.style.height = '400px';
            image1.style.display = 'block'; // Show image in div1
        });

        // Cleanup event listeners on component unmount
        return () => {
            div1.removeEventListener('mouseenter', () => { });
            div1.removeEventListener('mouseleave', () => { });
            div2.removeEventListener('mouseenter', () => { });
            div2.removeEventListener('mouseleave', () => { });
        };
    }, []);

    return (
        <div className="mt-20 flex flex-col justify-between items-center">
        {/* First Card */}
        <div className="w-72 relative group rounded-[10px] bg-amber-400 div1 transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden group">
            <div className="text-center p-5">
                <p className="text-3xl whitespace-nowrap">Fantasy Cricket</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor nesciunt incidunt.</p>
            </div>
            {/* Image Container */}
            <div className="w-full group-hover:h-96 transition-all h-60 relative overflow-hidden duration-300 group-hover:scale-105 aspect-[1/1]">
                <Image
                    className="object-cover  w-full h-full rounded-[10px]"
                    src={'https://placehold.co/150x150/000000/FFFFFF/png'}
                    alt="fantasy"
                    width={150}
                    height={150}
                />
            </div>
        </div>

        {/* Second Card */}
        <div className="w-72 relative mt-10 group rounded-[10px] bg-amber-400 div2 group transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden">
            <div className="text-center p-5">
                <p className="text-3xl whitespace-nowrap">Fantasy Cricket</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor nesciunt incidunt. !</p>
            </div>

            <div className="w-full h-60 duration-300 group-hover:scale-105 group-hover:h-96  relative overflow-hidden aspect-[1/1]">
                <Image
                    className="object-cover w-full h-full rounded-[10px]"
                    src={'https://placehold.co/150x150/000000/FFFFFF/png'}
                    alt="fantasy"
                    width={150}
                    height={150}
                />
            </div>
        </div>
    </div>
    );
}

export default HomeLeftCards;


