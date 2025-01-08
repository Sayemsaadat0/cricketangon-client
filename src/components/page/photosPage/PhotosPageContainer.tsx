"use client";
import { useGetPhotos } from "@/hooks/photo.hooks";
import { Grid, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import Masonry from "react-masonry-css";

// Types
type PhotoData = {
  id: number;
  image: string;
  category: string;
  created_at: string;
  updated_at: string;
};

type PhotoGalleryProps = {
  breakpointColumnsObj: {
    default: number;
    [key: number]: number;
  };
  data: PhotoData[];
  category: string;
  title: string;
  viewMode: "grid" | "masonry";
};

const PhotoGrid: FC<Omit<PhotoGalleryProps, "breakpointColumnsObj">> = ({
  data,
  category,
  title,
}) => {
  const filteredData = data.filter((photo) => photo.category === category);

  return (
    <div className="space-y-3">
      <div className="text-xl text-c-violet-600 font-semibold">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {filteredData.map((photo, index) => {
          const getGridClass = () => {
            switch (index % 12) {
              case 1:
              case 3:
              case 4:
                return "row-span-2";
              default:
                return "row-span-1";
            }
          };

          return (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-[20px] ${getGridClass()}`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photo.image}`}
                alt={`Photo ${photo.id}`}
                width={390}
                height={400}
                layout="responsive"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={index < 4}
                loading={index >= 4 ? "lazy" : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MasonryGallery: FC<PhotoGalleryProps> = ({
  breakpointColumnsObj,
  data,
  category,
  title,
}) => {
  const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const filteredData = data.filter((photo) => photo.category === category);

  return (
    <div className="space-y-3">
      <div className="text-xl text-c-violet-600 font-semibold">{title}</div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredData.map((photo, index) => (
          <div key={photo.id} className="relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photo.image}`}
              alt={`Photo ${photo.id}`}
              width={390}
              height={400}
              layout="responsive"
              className="rounded-[20px] object-cover"
              onContextMenu={handleContextMenu}
              priority={index < 4}
              loading={index >= 4 ? "lazy" : undefined}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

const PhotosPageContainer = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [activeTab, setActiveTab] = useState<"regular" | "moment">("regular");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const { data, isLoading } = useGetPhotos();
  const photos = data?.data?.data || [];

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const Gallery = viewMode === "grid" ? PhotoGrid : MasonryGallery;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div>
            <Link className="text-gray-500 hover:text-gray-700" href="/">
              Home
            </Link>{" "}
            /
          </div>
          <div>
            <Link className="font-bold hover:text-purple-600" href="/photos">
              Photos
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("masonry")}
            className={`p-2 rounded-full ${viewMode === "masonry"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
              }`}
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-full ${viewMode === "grid"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
              }`}
          >
            <Grid size={20} />
          </button>
        </div>
      </div>
      <div className="text-xl text-c-violet-600 font-semibold">Photos</div>

      {/* Mobile view with tabs */}
      <div className="block lg:hidden">
        <div className="space-x-3 mb-4">
          <button
            className={`${activeTab === "regular"
                ? "text-white bg-purple-600 px-3 py-1 rounded-full"
                : "text-gray-500 bg-gray-200 px-2 py-1 rounded-full"
              }`}
            onClick={() => setActiveTab("regular")}
          >
            General
          </button>
          <button
            className={`${activeTab === "moment"
                ? "text-white bg-purple-600 px-3 py-1 rounded-full"
                : "text-gray-500 bg-gray-300 px-2 py-1 rounded-full"
              }`}
            onClick={() => setActiveTab("moment")}
          >
            Moments
          </button>
        </div>

        <Gallery
          data={photos}
          category={activeTab}
          breakpointColumnsObj={breakpointColumnsObj}
          title={
            activeTab === "regular" ? "General" : "Cricketangon Special Moments"
          }
          viewMode={viewMode}

        />
      </div>

      {/* Desktop view showing both galleries */}
      <div className="hidden lg:flex gap-10">
        <div className="w-full md:w-1/2">
          <Gallery
            data={photos}
            category="regular"
            breakpointColumnsObj={breakpointColumnsObj}
            title="General"
            viewMode={viewMode}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Gallery
            data={photos}
            category="moment"
            breakpointColumnsObj={breakpointColumnsObj}
            title="Cricketangon Special Moments"
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosPageContainer;
