import DashboardIcon from "@/components/core/icons/dashboard/DashboardIcon";
import { formatDateToReadable } from "@/lib/timeStamp";
import Image from "next/legacy/image";

const ArticleDetailsContainer = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="space-y-10">
        <p className="font-semibold">Category: -- {data?.data?.categoryName}</p>
        <div>
          <p className="text-w-title-3-Medium-36 md:max-w-[80%] text-center mx-auto">
            {data?.data?.title}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <div className="w-5 h-5 bg-c-violet-50 rounded-full"></div>
            <p>
              -- Written by :{" "}
              <span className="uppercase">{data?.data?.authorName}</span> ,{" "}
              {formatDateToReadable(data?.data?.created_at)}
            </p>
          </div>
          <div className="flex gap-5">
            <div className="p-2 border rounded-[10px]">
              <DashboardIcon className="text-c-violet-50" size={"24"} />
            </div>
            <div className="p-2 border rounded-[10px]">
              <DashboardIcon className="text-c-violet-50" size={"24"} />
            </div>
            <div className="p-2 border rounded-[10px]">
              <DashboardIcon className="text-c-violet-50" size={"24"} />
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-5">
          <Image
            className="h-full"
            src={
              `${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.data?.image}` ||
              "https://images.pexels.com/photos/29401544/pexels-photo-29401544/free-photo-of-vibrant-field-of-orange-marigolds-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Some"
            width={1600}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div>{data?.data?.description}</div>
      </div>
    </div>
  );
};

export default ArticleDetailsContainer;
