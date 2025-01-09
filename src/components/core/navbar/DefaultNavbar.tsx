"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { DefaultNavMenuData } from "./NavMenudata";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

// import Image from 'next/image';
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
            <Link
              className={`${
                pathname === i.url && "text-c-violet-200 font-bold"
              }`}
              href={i.url}
            >
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
  const { user, logout } = useAuth();
  // console.log(user);
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    console.log("User logged out successfully!");
  };
  return (
    <div
      className={`${
        pathname === "/" && "mt-2"
      } w-full  fixed top-0 left-0   z-30`}
    >
      <nav className="text-white relative crick-Container">
        <div
          className={`flex justify-between items-center bg-gradient-to-r from-c-violet-400 via-c-violet-700 to-c-violet-900 py-1.5 px-2 rounded-[20px] ${
            pathname === "/article/:slug" && "md:rounded-b-none"
          }`}
        >
          <div className="">
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
            {user === null ? (
              <div className="hidden lg:block p-[2.5px] bg-gradient-to-tr from-cyan-400 via-c-violet-200 to-c-violet-300  rounded-full">
                <Link href={"/login"}>
                  <Button className="" variant="roundedBtn" label="Sign in" />
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
                      alt={user?.image || ""}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="">
                    <Link
                      className="block p-2 hover:bg-c-violet-200"
                      href={`/profile/${user?.id}`}
                    >
                      Profile
                    </Link>
                    <div
                      onClick={handleLogout}
                      className="block cursor-pointer p-2 hover:bg-c-violet-200"
                    >
                      Logout
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* <Button
                  onClick={logout}
                  // variant={"roundedOutlineBtn"}
                  label="Logout"
                /> */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DefaultNavbar;
