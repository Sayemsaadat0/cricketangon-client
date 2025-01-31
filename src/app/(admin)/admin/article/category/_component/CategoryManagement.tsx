"use client";
import DeleteAction from "@/components/core/DeleteAction";
import MenuIcon from "@/components/core/icons/publicIcon/MenuIcon";
import DashboardTable, {
  DashboardTableColumn,
} from "@/components/core/table/DashboardTable";
import ArticleForm from "@/components/page/ArticleContainer/ArticleForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArticleType, categoryType } from "@/model/article.type";
import Image from "next/image";
import { FC } from "react";
import CategoryForm from "./CategoryForm";
import { useDeleteCategory, useGetCategory } from "../_hooks/category.hook";

const CategoryManagement = () => {
  const TableColumn: DashboardTableColumn[] = [
    {
      title: "Title",
      dataKey: "title",
      row: (data: categoryType) => (
        <div className=" min-w-[100px] max-w-[350px]  font-normal">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="shrink-0 inline-block w-12 h-12">
              <Image
                className="object-cover rounded-[10px] w-full h-full"
                src={
                  data?.image
                    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.image}`
                    : "https://placehold.co/100x100/e2e2db/red/png"
                }
                alt={data.name || ""}
                width={50}
                height={50}
                priority
              />
            </div>
            <p className="line-clamp-2 text-w-paragraph-regular-20">
              {data.name}
            </p>
          </div>
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
  const TableAction: FC<tableActionType> = ({ data }) => {
    const { mutateAsync } = useDeleteCategory(data?.id || "");
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-2xl font-bold">
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-20 w-[180px]">
            <div>
              <div className="hover:bg-c-violet-50">
                <ArticleForm instance={data} />
              </div>
              <div className="hover:bg-c-violet-50 w-full p-2 ">
                <DeleteAction
                  handleDeleteSubmit={mutateAsync}
                  // isLoading={isDeleteing}
                />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  const { data } = useGetCategory();
  // console.log(data?.data?.data);

  return (
    <div className="space-y-10">
      {/* Headings */}
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="absolute z-20 left-2 -top-2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-c-violet-100 blur-sm"></div>
          <div className="absolute z-20 -left-4 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-cyan-200 blur-sm  "></div>
          <p className="text-4xl font-semibold z-30 relative">
            {"CategoryList List"}
          </p>
        </div>
        <div>
          <CategoryForm />
        </div>
      </div>
      {/* Table */}
      <DashboardTable
        columns={TableColumn}
        isLoading={false}
        data={data?.data?.data || []}
      />
    </div>
  );
};

export default CategoryManagement;
