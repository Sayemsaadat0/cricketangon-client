"use client";
import DeleteAction from "@/components/core/DeleteAction";
import MenuIcon from "@/components/core/icons/publicIcon/MenuIcon";
import DashboardTable, {
  DashboardTableColumn,
} from "@/components/core/table/DashboardTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetStats } from "@/hooks/stats.hook";
import { ArticleType } from "@/model/article.type";
import Image from "next/image";
import { FC } from "react";
import StatsForm from "./StatsForm";

const StatsManagement = () => {
  const { data, isLoading } = useGetStats();

  const TableColumn: DashboardTableColumn[] = [
    {
      title: "Title",
      dataKey: "title",
      row: (data: ArticleType) => (
        <div className="min-w-[100px] max-w-[350px] font-normal">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="shrink-0 inline-block w-12 h-12">
              <Image
                className="object-cover rounded-[10px] w-full h-full"
                src={
                  data?.image
                    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.image}`
                    : "https://placehold.co/100x100/e2e2db/red/png"
                }
                alt={data.title || ""}
                width={50}
                height={50}
                priority
              />
            </div>
            <p className="line-clamp-2 text-w-paragraph-regular-20">
              {data.title}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Description",
      dataKey: "description",
      row: (data: ArticleType) => (
        <div>
          <p className="line-clamp-2 w-fit px-1 rounded-full text-xl text-oc-primary-2-500 dark:text-oc-primary-2-300">
            {data.description || "N/A"}
          </p>
        </div>
      ),
    },
    {
      title: "Date",
      dataKey: "date",
      row: (data: ArticleType) => (
        <div className="text-w-small-regular-16 min-w-[100px] max-w-[300px]">
          <p className="line-clamp-2">
            {data.created_at
              ? new Date(data.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "N/A"}
          </p>
        </div>
      ),
    },
    {
      title: "Action",
      dataKey: "action",
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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-2xl font-bold">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-20 w-[180px]">
          <div>
            <div className="hover:bg-c-violet-50">
              <StatsForm instance={data} handleFormSubmit={() => undefined} />
            </div>
            <div className="hover:bg-c-violet-50 w-full p-2">
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

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="relative">
          <p className="text-4xl font-semibold">Stats List</p>
        </div>
        <div>
          <StatsForm handleFormSubmit={() => undefined} />
        </div>
      </div>
      <DashboardTable
        columns={TableColumn}
        isLoading={isLoading}
        data={data?.data?.data || []}
      />
    </div>
  );
};

export default StatsManagement;
