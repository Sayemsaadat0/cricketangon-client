'use client';
import { FC } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from '../icons/dashboard/DashboardIcon';
import Logo from '../logo/Logo';

interface MenuItem {
    path: string;
    label: string;
    icon: JSX.Element;
}

const DashboardAside: FC = () => {
    const pathname = usePathname();

    // Simplified menu items without subRoutes
    const menuItems: MenuItem[] = [
        {
            path: "/admin",
            label: "Dashboard",
            icon: <DashboardIcon size={'24'} />,
        },
        {
            path: "/admin/article",
            label: "Article",
            icon: <DashboardIcon size={'24'} />,
        },
        {
            path: "/admin/stats",
            label: "Stats",
            icon: <DashboardIcon size={'24'} />,
        },
        {
            path: "/admin/photos",
            label: "Photos",
            icon: <DashboardIcon size={'24'} />,
        },
        {
            path: "/admin/players-info",
            label: "Players Info",
            icon: <DashboardIcon size={'24'} />,
        },
        {
            path: "/admin/users",
            label: "Users",
            icon: <DashboardIcon size={'24'} />,
        },
    ];

    return (
        <div className="h-screen p-5 bg-gradient-to-t from-c-violet-500 via-c-violet-700 to-c-violet-900 max-w-[280px] px-10 flex flex-col justify-between">
            <div className="space-y-20">
                <div className="flex items-center gap-3">
                    <Logo  />
                </div>
                <div className="text-oc-white-50">
                    <div className="space-y-3">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className={`flex gap-2 items-center w-full py-2 transition-all px-2 rounded-[6px] ${pathname.startsWith(item.path) ? " bg-c-violet-50 " : "hover:bg-c-violet-50 hover:text-black  text-c-violet-50 "}`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardAside;
