"use client"
import React, { useRef, useState } from 'react';
import DashboardIcon from "@/components/core/icons/dashboard/DashboardIcon";
import { formatDateToReadable } from "@/lib/timeStamp";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useGetArticles } from '@/app/(admin)/admin/article/_hook/article.hook';
// import { Link } from 'lucide-react';
import { ArticleType } from '@/model/article.type';

const ArticleDetailsContainer = ({ data }: { data: any }) => {
  const { data: articlesData, isLoading } = useGetArticles();
  const articles = articlesData?.data?.data;
  return (
    <div>
      <div className="space-y-10 pb-16">
        <p className="font-semibold">Category: -- {data?.data?.categoryName}</p>
        <div>
          <p className="text-w-title-3-Medium-36 md:max-w-[80%] text-center mx-auto">
            {data?.data?.title}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-5 h-5 bg-c-violet-50 rounded-full"></div>
            <p className='flex flex-col md:flex-row items-center'>
              <span>
                <span>-- Written by :{" "}</span>
                <span className="uppercase">{data?.data?.authorName},{" "}</span>
              </span> 
              <span>{formatDateToReadable(data?.data?.created_at)}</span>
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
            src={data?.data?.image &&
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

        <div className='mb-12'>
          <h2 className="text-2xl font-semibold  mb-6">Suggested Articles</h2>
          <Swiper
            spaceBetween={30}
            loop={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000, // Delay between slides (in milliseconds)
              disableOnInteraction: false, // Keeps autoplay active even after user interaction
            }}
            modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay to modules
            className="mySwiper"
            breakpoints={{
              // When the screen width is 640px or less (small devices)
              640: {
                slidesPerView: 1,
              },
              // When the screen width is between 641px and 1024px (medium devices)
              1024: {
                slidesPerView: 2,
              },
              // When the screen width is larger than 1024px (large devices)
              1280: {
                slidesPerView: 3,
              },
              // For even larger screens, show 4 slides
              1600: {
                slidesPerView: 4,
              },
            }}
          >
            {!isLoading && articles?.map((i: ArticleType) => (
              <SwiperSlide
                key={Math.random()}
                className="relative overflow-hidden rounded-[20px] group"
              >
                <Image
                  src={
                    `${process.env.NEXT_PUBLIC_IMAGE_URL}${i.image}` ||
                    "https://i.pinimg.com/564x/cd/a8/3c/cda83c0eee224d460c926479f224ec3e.jpg"
                  }
                  alt={`Placeholder`}
                  width={280}
                  height={300}
                  layout="responsive"
                  className="rounded-[20px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </div>
  );
};

export default ArticleDetailsContainer;
