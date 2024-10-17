"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import Image from "next/image";




const DefaultNavbarDropdown = () => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
                <DropdownMenuTrigger className="flex items-center gap-2">
                    <Avatar className="border">
                        <AvatarImage
                            className="w-12 h-12 object-cover  rounded-full"
                            src={`https://i.pinimg.com/736x/60/b2/89/60b289f24dfd44f06239f2328850d06e.jpg`}
                            alt="@shadcn"
                        />
                        <AvatarFallback>PA</AvatarFallback>
                    </Avatar>

                    <div>
                        {/* <ArrowDownIcon /> */}
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-[10px] font-semibold">
                    <DropdownMenuItem className="flex gap-4 w-full px-5 py-2.5">
                        <div className="w-12 h-12 overflow-hidden  rounded-full">
                            <Image
                                width={40}
                                height={40}
                                className="w-12 h-12 object-cover  rounded-full"
                                src={`https://i.pinimg.com/736x/60/b2/89/60b289f24dfd44f06239f2328850d06e.jpg`}
                                alt="@shadcn"
                            />
                        </div>
                        <div>
                            <p className="font-bold">
                                sadsgdsgdjh sgds d sgd
                            </p>
                            <p className="font-light">sdgssdsdv0wesdsvsads@sdgsh.com</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(!open)}>
                        <Link className="w-full px-5 py-2.5" href={"/profile"}>
                            Profile setting
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <button
                            className="px-5 py-2.5 w-full  text-left"
                        // onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};


export default DefaultNavbarDropdown