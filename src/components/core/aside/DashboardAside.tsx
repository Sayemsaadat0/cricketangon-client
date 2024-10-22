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
    ];

    return (
        <div className="h-screen p-5 bg-oc-primary-1-900 max-w-[280px] px-10 flex flex-col justify-between">
            <div className="space-y-20">
                <div className="flex items-center gap-3">
                    <Logo isAdmin />
                </div>
                <div className="text-oc-white-50">
                    <div className="space-y-3">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className={`flex gap-2 items-center w-full py-2 transition-all px-2 rounded-[6px] ${pathname.startsWith(item.path) ? "bg-oc-white-50 text-oc-primary-1-900" : "hover:bg-oc-white-50 hover:text-oc-primary-1-900"}`}
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
