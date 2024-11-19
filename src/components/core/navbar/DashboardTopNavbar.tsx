'use client';
import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ArrowIcon from '../icons/publicIcon/ArrowIcon';
import SignoutIcon from '../icons/dashboard/SignoutIcon';
type MenuItem = {
    path: string;
    label: string;
};

const DashboardTopNavbar: FC = () => {
    const { back, forward } = useRouter();
    const pathname = usePathname();

    const menuItems: MenuItem[] = [
        {
            path: "/admin/analytics",
            label: "Analytics",
        },
        {
            path: "/admin/service",
            label: "Service",
        },
        {
            path: "/admin/blogs",
            label: "Blogs",
        },
        {
            path: "/admin/contact",
            label: "Contact",
        },
        {
            path: "/admin/order",
            label: "Order",
        },
        {
            path: "/admin/price",
            label: "Price",
        },
        {
            path: "/admin/sample",
            label: "Sample",
        },
        {
            path: "/admin/testimonial",
            label: "Testimonial",
        },
    ];

    // Find the matching menu item based on the current pathname
    const currentMenuItem = menuItems.find(item => pathname.startsWith(item.path));

    return (
        <div className="px-8 bg-c-white-200 py-6 border-b  flex justify-between">
            <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                    <div
                        onClick={back}
                        className="p-4 transition-all border cursor-pointer hover:bg-c-violet-500 hover:text-c-violet-50 rounded-full "
                    >
                        <ArrowIcon className="rotate-180" />
                    </div>
                    <div
                        className="p-4 transition-all cursor-pointer border hover:bg-c-violet-500 hover:text-c-violet-50 rounded-full "
                        onClick={forward}
                    >
                        <ArrowIcon />
                    </div>
                </div>
                <div>
                    <p className="leading-none text-w-title-1-Medium-22">Admin Dashboard</p>
                    {/* Display the label based on the current pathname */}
                    <p className="text-w-paragraph-regular-20 ">
                        {currentMenuItem ? currentMenuItem.label : 'Dashboard'}
                    </p>
                </div>
            </div>

            <div className='flex text-w-paragraph-regular-20 cursor-pointer  items-center  gap-2'>
                <SignoutIcon size={'24'} /> Sign out
            </div>
        </div>
    );
};

export default DashboardTopNavbar;
