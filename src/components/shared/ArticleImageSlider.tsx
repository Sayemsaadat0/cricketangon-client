'use client'

import { useGetArticles } from "@/app/(admin)/admin/article/_hook/article.hook";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const ArticleImageSlider = () => {
  const { data, isLoading } = useGetArticles();
  const articles = data?.data?.data?.slice(0, 5) || [];

  const images = articles.map((article: any) =>
    article.image
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${article.image}`
      : "https://placehold.co/800x500/e2e2db/red/png"
  ); // Fallback image if no article image exists

  return (
    <div className="relative w-full min-w-full sm:-mx-12 md:-mx-0 md:min-w-[300px] sm:min-w-[360px] lg:max-w-[400px] mx-auto h-[580px] lg:h-[600px] rounded-[20px] overflow-hidden">
      <Swiper
        speed={1500}
        loop

        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {isLoading ? (
          // Skeleton loader while data is loading
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-full bg-gray-300 animate-pulse rounded-[20px]"></div>
            </div>
          </SwiperSlide>
        ) : (
          images.map((src: any, index: number) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                loading="lazy"
                className="object-cover"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default ArticleImageSlider;
