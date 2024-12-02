"use client";;
import DeleteAction from '@/components/core/DeleteAction'
import SettoingsIcon from '@/components/core/icons/dashboard/SettingsIcon';
import MenuIcon from '@/components/core/icons/publicIcon/MenuIcon'
import DashboardTable, { DashboardTableColumn } from '@/components/core/table/DashboardTable'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { usersData } from '@/data/dummy.data';
import { UsersType } from '@/model/users.type';
import Image from 'next/image'
import { FC, useState } from 'react';

const ArticleManagement = () => {

    const TableColumn: DashboardTableColumn[] = [
        {
            title: 'Title',
            dataKey: 'title',
            row: (data: UsersType) => (
                <div className=" min-w-[100px] max-w-[350px]  font-normal">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="shrink-0 inline-block w-12 h-12">
                            <Image
                                className="object-cover rounded-[10px] w-full h-full"
                                src={data.thumbnail || 'https://placehold.co/100x100/e2e2db/red/png'}
                                alt={data.username || ''}
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                        <p className="line-clamp-2 text-w-paragraph-regular-20">{data.username}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Email',
            dataKey: 'email',
            row: (data: UsersType) => (
                <div>
                    <p className="line-clamp-1 bg-oc-primary-4-100 w-fit px-2 rounded-full  text-black">
                        {data.email}
                    </p>
                </div>
            ),
        },
        {
            title: 'Role',
            dataKey: 'role',
            row: (data: UsersType) => (
                <div>
                    <p className="line-clamp-2  w-fit px-1 rounded-full text-xl text-oc-primary-2-500 dark:text-oc-primary-2-300">
                        {data.role || 'N/A'}
                    </p>
                </div>
            ),
        },

        {
            title: 'Date',
            dataKey: 'date',
            row: () => (
                <div className="text-w-small-regular-16 min-w-[100px] max-w-[300px]">
                    <p className="line-clamp-2">
                        10/10/10
                    </p>
                </div>
            ),
        },

        {
            title: 'Action',
            dataKey: 'action',
            row: (data: UsersType) => (
                <div className="flex justify-end items-center">
                    <TableAction data={data} />
                </div>
            ),
        },
    ];

    type tableActionType = {
        data: UsersType;
    };
    const TableAction: FC<tableActionType> = ({ data }) => (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-2xl font-bold">
                    <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-20 w-[180px]">
                    <div>
                        <div className="hover:bg-c-violet-50">
                            <div className="cursor-pointer flex gap-2 p-2  w-full items-center">
                                <SettoingsIcon /> <span>
                                    Make Admin
                                </span>
                            </div>
                        </div>
                        <div className="hover:bg-c-violet-50 w-full p-2 ">
                            <DeleteAction
                                handleDeleteSubmit={() => undefined}
                                isLoading={false}
                            />
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

    const [selectedRole, setselectedRole] = useState('user');

    const filteredRoled = selectedRole
        ? usersData.filter(user => user.role === selectedRole)
        : usersData;

    const handleRoleClick = (role: string) => {
        setselectedRole(prevRole => (prevRole === role ? '' : role));
    };
    return (
        <div className='space-y-10'>
            {/* Headings */}
            <div className="flex justify-between items-center">
                <div className="relative">
                    <div className="absolute z-20 left-2 -top-2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-c-violet-100 blur-sm"></div>
                    <div className="absolute z-20 -left-4 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-cyan-200 blur-sm  "></div>
                    <p className="text-4xl font-semibold z-30 relative">{'Users'}</p>
                </div>
            </div>
            <div className='space-y-5'>
                <div className="flex space-x-4 mb-4">
                    {/* <button
                    onClick={() => setselectedRole("")}
                    className="px-4 py-2 bg-gray-200 rounded"
                >
                    All
                </button> */}
                    <button
                        onClick={() => handleRoleClick("user")}
                        className={`px-5 rounded-full py-1.5 ${selectedRole === "user" ? "bg-c-violet-500 text-white" : "bg-c-grey-50"
                            }`}
                    >
                        User
                    </button>
                    <button
                        onClick={() => handleRoleClick("admin")}
                        className={`px-5 rounded-full py-1.5 ${selectedRole === "admin" ? "bg-c-violet-500 text-white" : "bg-c-grey-50"
                            }`}
                    >
                        Admin
                    </button>

                </div>
                <DashboardTable columns={TableColumn} isLoading={false} data={filteredRoled || []} />
            </div>
            {/* Table */}

        </div>
    )
}

export default ArticleManagement