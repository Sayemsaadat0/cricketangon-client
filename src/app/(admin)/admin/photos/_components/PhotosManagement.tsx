"use client";
import DeleteAction from "@/components/core/DeleteAction";
import DashboardTable, {
  DashboardTableColumn,
} from "@/components/core/table/DashboardTable";
import { useDeletePhoto, useGetPhotos } from "@/hooks/photo.hooks";
import { ArticleType } from "@/model/article.type";
import Image from "next/image";
import { FC } from "react";
import PhotosForm from "./PhotosForm";

const PhotosManagement = () => {
  const TableColumn: DashboardTableColumn[] = [
    {
      title: "Title",
      dataKey: "title",
      row: (data: ArticleType) => (
        <div className=" min-w-[100px] max-w-[350px]  font-normal">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="shrink-0 inline-block max-w-32 max-h-32">
              <Image
                className="object-cover rounded-[10px] w-full h-full"
                src={
                  data?.image
                    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.image}`
                    : "https://placehold.co/100x100/e2e2db/red/png"
                }
                alt={data.title || ""}
                width={100}
                height={50}
                priority
              />
            </div>
          </div>
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
              ? new Date(data.created_at).toLocaleDateString()
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
  const TableAction: FC<tableActionType> = ({ data }) => {
    const { mutateAsync, isPending } = useDeletePhoto(data?.id || '')
    return <div>
      <div className="flex w-fit gap-1">
        <div>
          <PhotosForm instance={data} />
        </div>
        <div className=" w-full ">
          <DeleteAction
            isOnlyIcon
            handleDeleteSubmit={mutateAsync}
            isLoading={isPending}
          />
        </div>
      </div>
    </div>
  }
  const { data, isLoading } = useGetPhotos();

  return (
    <div className="space-y-10">
      {/* Headings */}
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="absolute z-20 left-2 -top-2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-c-violet-100 blur-sm"></div>
          <div className="absolute z-20 -left-4 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-cyan-200 blur-sm  "></div>
          <p className="text-4xl font-semibold z-30 relative">{"Photo List"}</p>
        </div>
        <div>
          <PhotosForm />
        </div>
      </div>
      {/* Table */}
      <DashboardTable
        columns={TableColumn}
        isLoading={isLoading}
        data={data?.data?.data || []}
      />
    </div>
  );
};

export default PhotosManagement;
