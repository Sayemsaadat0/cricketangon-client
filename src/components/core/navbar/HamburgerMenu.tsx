'use client'
import React from 'react'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Button from '../button/Button'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image'
import { useAuth } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { DefaultNavMenuList } from './DefaultNavMenuList'
import Logo from '../logo/Logo'

const HamburgerMenu = () => {
    const { user, logout } = useAuth();
    // console.log(user);
    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        console.log("User logged out successfully!");
    };
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className='border p-1 rounded-full'><HamburgerMenuIcon /></button>
            </SheetTrigger>
            <SheetContent>
                <div className="px-4">
                    <Logo />
                </div>
                <div>
                    <DefaultNavMenuList />
                </div>
                <div className="px-4">
                    {user === null ? (
                        <div className="w-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
                            <Link href={"/login"}>
                                <Button className="w-full" variant="roundedBtn" label="Sign in" />
                            </Link>

                        </div>
                    ) : (
                        <div className="flex  items-center gap-3">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Image
                                        className="rounded-full"
                                        src={user?.image || "/not.png"}
                                        width={40}
                                        height={40}
                                        alt={user?.image || ''}
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="">

                                    <Link className="block p-2 hover:bg-c-violet-200"
                                        href={`/profile/${user?.id}`}
                                    >
                                        Profile
                                    </Link>
                                    <div onClick={handleLogout} className="block cursor-pointer p-2 hover:bg-c-violet-200"
                                    >
                                        Logout
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}
                </div>


            </SheetContent>
        </Sheet>
    )
}

export default HamburgerMenu
