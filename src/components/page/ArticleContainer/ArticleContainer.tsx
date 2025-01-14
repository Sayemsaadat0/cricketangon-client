"use client";
// import {  articlesData } from "@/data/dummy.data";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import Masonry from "react-masonry-css";
import ArticleForm from "./ArticleForm";
import { useGetCategory } from "@/app/(admin)/admin/article/category/_hooks/category.hook";
import { useCreateArticle, useGetArticles } from "@/app/(admin)/admin/article/_hook/article.hook";
import { ArticleType } from "@/model/article.type";

const ArticleContainer: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);


  const { data: categoryData, isLoading: isCategoryLoading } = useGetCategory();
  // console.log(categoryData?.data?.data);
  const { data: articlesData, isLoading } = useGetArticles();
  // return console.log(articlesData?.data?.data)

  const filteredArticles = selectedCategory
    ? articlesData?.data?.data?.filter((article: ArticleType) => article?.categoryId === selectedCategory)
    : articlesData?.data?.data;

  const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const handleCategoryClick = (category: number) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  /* 
      
  */

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1">
        <div>
          <Link className="text-gray-500" href={"/"}>
            Home
          </Link>{" "}
          /
        </div>
        <div>
          <Link className="font-bold" href={"/article"}>
            Articles
          </Link>
        </div>
      </div>
      <div className="text-xl text-c-violet-600 font-semibold">Articles</div>

      {/* Category Filter */}
      <div className="flex gap-5 overflow-x-auto customScrollbar p-2">
        {isCategoryLoading && (
          <div className="flex gap-2 justify-between items-center">
            {[...new Array(4)].map((i: any) => (
              <div
                key={Math.random()}
                className={`w-40 h-16 rounded-[20px] bg-slate-200`}
              ></div>
            ))}
          </div>
        )}
        {categoryData?.data?.data &&
          categoryData?.data?.data.map((i: any) => (
            <div
              key={Math.random()}
              className={`relative min-w-[100px] rounded-[20px] group overflow-hidden cursor-pointer ${selectedCategory === i?.id ? "ring-2 ring-violet-600" : ""
                }`}
              onClick={() => handleCategoryClick(i?.id)}
            >
              <div
                className="relative overflow-hidden w-40 h-16 rounded-[20px] bg-cover blur-[2px] bg-center"
                style={{
                  backgroundImage: `url(${i?.image
                    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${i?.image}`
                    : "https://placehold.co/100x100/e2e2db/red/png"
                    })`,
                }}
              ></div>

              <div className="absolute inset-0 flex items-center justify-center duration-500 bg-c-white-900/50">
                <p className="font-bold text-sm text-white">
                  {i?.category || i?.name || "Category"}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Article Form */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="md:text-2xl font-semibold text-c-violet-500">
            Latest Article
          </p>
          <ArticleForm />
        </div>
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {!isLoading && filteredArticles && filteredArticles?.map((i: ArticleType) => (
              <div
                key={Math.random()}
                className="relative overflow-hidden rounded-[20px] group"
              >
                <Link href={`/article/${i.id}`} className=" ">
                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        `${process.env.NEXT_PUBLIC_IMAGE_URL}${i.image}` ||
                        "https://i.pinimg.com/564x/cd/a8/3c/cda83c0eee224d460c926479f224ec3e.jpg"
                      }
                      alt={`Placeholder`}
                      width={390}
                      height={400}
                      layout="responsive"
                      className="rounded-[20px] object-cover"
                      onContextMenu={handleContextMenu}
                    />
                  </div>

                  <div className="text-white transition-all duration-500 p-3 absolute w-full -bottom-96 group-hover:bottom-0 bg-gradient-to-t from-black/50 space-y-5 to-transparent">
                    <p className="truncate text-2xl font-bold">{i?.title}</p>
                    <p className="text-c-white-700">{i?.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </Masonry>
        </div>
        {/*  */}

      </div>
    </div>
  );
};

export default ArticleContainer;

