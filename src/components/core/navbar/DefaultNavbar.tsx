"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../logo/Logo'
import { usePathname } from 'next/navigation';
import { DefaultNavMenuData } from './NavMenudata';
import Button from '../button/Button';
import Image from 'next/image';
// import DefaultNavbarDropdown from './DefaultNavbarDropdown';

// List Items
export const DefaultNavMenuList = () => {
    const pathname = usePathname();
    return (
        <div
            className="flex flex-col pl-7 py-16
        lg:gap-5 lg:pl-0 lg:py-0 lg:flex-row lg:items-center whitespace-nowrap "
        >
            {DefaultNavMenuData.map((i) => {
                return (
                    <div key={Math.random()}>
                        <Link className={`${pathname === i.url && 'text-c-violet-200 font-bold'}`} href={i.url}>
                            <p className="text-16-regular">{i.title}</p>
                            <p className="my-5 block h-[1px] bg-slate-400 lg:hidden "></p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};


// Default Component
const DefaultNavbar = () => {
    const pathname = usePathname()
    return (
        <div className={`${pathname === '/' && 'mt-2'} w-full  fixed top-0 left-0   z-30`}>
            <nav className="text-white relative crick-Container">
                <div className={`flex justify-between items-center bg-gradient-to-r from-c-violet-400 via-c-violet-700 to-c-violet-900 py-1.5 px-2 rounded-[20px] ${pathname !== '/' && 'rounded-b-none'}`} >
                    <div className=''>
                        <Logo />
                    </div>
                    <div className="hidden lg:block absolute  right-1/2 top-2/2 transform translate-x-1/2">
                        <div className=" flex justify-center ">
                            <DefaultNavMenuList />
                        </div>
                    </div>
                    <div className="flex  items-center gap-2 md:gap-[10px] cursor-pointer xl:gap-5 justify-end">
                        {/* <DefaultNavbarDropdown /> */}
                        <div className="lg:hidden pl-2 ">
                            {/* <DefaultHambuergerMenu /> */}
                        </div>
                        <div className="hidden lg:block p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
                            <Link href={'/login'}>
                                <Button
                                    className=""
                                    variant="roundedBtn"
                                    label="Sign in"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DefaultNavbar