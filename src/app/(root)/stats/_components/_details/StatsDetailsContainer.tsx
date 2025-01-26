import DashboardIcon from "@/components/core/icons/dashboard/DashboardIcon";
import { formatDateToReadable } from "@/lib/timeStamp";
import Image from "next/legacy/image";

const StatsDetailsContainer = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="space-y-10">
        {/* Category */}
        <p className="font-semibold">Category: -- {data?.data?.categoryName}</p>

        {/* Title */}
        <div>
          <p className="text-w-title-3-Medium-36 md:max-w-[80%] text-center mx-auto">
            {data?.data?.title}
          </p>
        </div>

        {/* Author and Date */}
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <div className="w-5 h-5 bg-c-violet-50 rounded-full"></div>
            <p>
              -- Created by :{" "}
              <span className="uppercase">{data?.data?.authorName}</span> ,{" "}
              {formatDateToReadable(data?.data?.created_at)}
            </p>
          </div>

          {/* Icons Section */}
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

        {/* Image Section */}
        <div className="w-full h-full mt-5">
          <Image
            className="h-full"
            src={data?.data?.image &&
              `${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.data?.image}` ||
              "https://via.placeholder.com/1600x800"
            }
            alt="Stats"
            width={1600}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Description */}
        <div>{data?.data?.description}</div>
      </div>
    </div>
  );
};

export default StatsDetailsContainer;
