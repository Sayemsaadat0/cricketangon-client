

'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';

const HomeMiddleCard = () => {

    useEffect(() => {
        const div3 = document.querySelector('.div3') as HTMLElement;
        const div4 = document.querySelector('.div4') as HTMLElement;
        const image3 = div3.querySelector('img') as HTMLElement;
        const image4 = div4.querySelector('img') as HTMLElement;

        div3.addEventListener('mouseenter', () => {
            div3.style.height = '600px';
            div4.style.height = '200px';
            image4.style.display = 'none'; // Hide image in div4
        });

        div3.addEventListener('mouseleave', () => {
            div3.style.height = '400px';
            div4.style.height = '400px';
            image4.style.display = 'block'; // Show image in div4
        });

        div4.addEventListener('mouseenter', () => {
            div4.style.height = '600px';
            div3.style.height = '200px';
            image3.style.display = 'none'; // Hide image in div3
        });

        div4.addEventListener('mouseleave', () => {
            div4.style.height = '400px';
            div3.style.height = '400px';
            image3.style.display = 'block'; // Show image in div3
        });

        // Cleanup event listeners on component unmount
        return () => {
            div3.removeEventListener('mouseenter', () => { });
            div3.removeEventListener('mouseleave', () => { });
            div4.removeEventListener('mouseenter', () => { });
            div4.removeEventListener('mouseleave', () => { });
        };
    }, []);

    return (
        <div className="mt-20 flex flex-col justify-between items-center">
            {/* First Card */}
            <div className="w-72 relative group rounded-[10px] bg-amber-400 div3 transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden group">
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
            <div className="w-72 relative mt-10 group rounded-[10px] bg-amber-400 div4 group transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden">
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

export default HomeMiddleCard;

