"use client";
import DeleteAction from '@/components/core/DeleteAction'
import DetailsIcon from '@/components/core/icons/dashboard/DetailsIcon'
import CheckIcon from '@/components/core/icons/publicIcon/CheckIcon';
import DashboardTable, { DashboardTableColumn } from '@/components/core/table/DashboardTable'
import { articlesData } from '@/data/dummy.data'
import { ArticleType } from '@/model/article.type'
import Image from 'next/image'
import { FC } from 'react';

const ArticleRequestManagement = () => {

    const TableColumn: DashboardTableColumn[] = [
        {
            title: 'Title',
            dataKey: 'title',
            row: (data: ArticleType) => (
                <div className=" min-w-[100px] max-w-[350px]  font-normal">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="shrink-0 inline-block w-12 h-12">
                            <Image
                                className="object-cover rounded-[10px] w-full h-full"
                                src={data.image || 'https://placehold.co/100x100/e2e2db/red/png'}
                                alt={data.title || ''}
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                        <p className="line-clamp-2 text-w-paragraph-regular-20">{data.title}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Category',
            dataKey: 'category',
            row: (data: ArticleType) => (
                <div>
                    <p className="line-clamp-1 bg-oc-primary-4-100 w-fit px-2 rounded-full  text-black">
                        {data.category}
                    </p>
                </div>
            ),
        },
        {
            title: 'Description',
            dataKey: 'description',
            row: (data: ArticleType) => (
                <div>
                    <p className="line-clamp-2  w-fit px-1 rounded-full text-xl text-oc-primary-2-500 dark:text-oc-primary-2-300">
                        {data.description || 'N/A'} Years
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
            row: (data: ArticleType) => (
                <div className="flex justify-end items-center">
                    <TableAction data={data} />
                </div>
            ),
        },
    ];

    type tableActionType = {
        data: ArticleType;
    };
    const TableAction: FC<tableActionType> = ({ data }) => (
        <div className='flex w-fit gap-1'>
            <div className='border border-green-500 bg-green-100 text-green-800  cursor-pointer flex items-center justify-center px-2.5  rounded-full w-fit'>
                <CheckIcon />
            </div>
            <div className='border border-c-violet-500 bg-c-violet-50  text-violet-700  cursor-pointer flex items-center justify-center px-2.5  rounded-full w-fit'>
                <DetailsIcon />
            </div>
            <div className=" w-full ">
                <DeleteAction
                    isOnlyIcon
                    handleDeleteSubmit={() => undefined}
                    isLoading={false}
                />
            </div>
        </div>
    );

    // const TableAction: FC<tableActionType> = ({ data }) => (
    //     <div>
    //         <DropdownMenu>
    //             <DropdownMenuTrigger className="text-2xl font-bold">
    //                 <MenuIcon />
    //             </DropdownMenuTrigger>
    //             <DropdownMenuContent className="mr-20 w-[180px]">
    //                 <div>
    //                     <div className="hover:bg-c-violet-50">
    //                         <Link
    //                             className="flex gap-2 p-2  w-full items-center "
    //                             href={`/admin/blogs/edit`}
    //                         >
    //                             <EditIcon /> <span>Edit</span>
    //                         </Link>
    //                     </div>
    //                     <div className="hover:bg-c-violet-50 w-full p-2 ">
    //                         <DeleteAction
    //                             handleDeleteSubmit={() => undefined}
    //                             isLoading={false}
    //                         />
    //                     </div>
    //                 </div>
    //             </DropdownMenuContent>
    //         </DropdownMenu>
    //     </div>
    // );

    return (
        <div className='space-y-10'>
            {/* Headings */}
            <div className="relative">
                <div className="absolute z-20 left-2 -top-2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-c-violet-100 blur-sm"></div>
                <div className="absolute z-20 -left-4 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-cyan-200 blur-sm  "></div>
                <p className="text-4xl font-semibold z-30 relative">{'Requested Articles List'}</p>
            </div>
            {/* Table */}
            <DashboardTable columns={TableColumn} isLoading={false} data={articlesData || []} />
        </div>
    )
}

export default ArticleRequestManagement