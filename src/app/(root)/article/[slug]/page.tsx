
// import RandomShapeGenerator from '@/components/core/RandomShapeGenerator'
// import React from 'react'
// import ArticleDetailsContainer from './_components/ArticleDetailsContainer'

// const page = () => {
//   return (
//     <div className="crick-Container relative  ">
//       <div className='mt-10 max-w-7xl overflow-hidden mx-auto fixed  w-full top-0 left-1/2 -translate-x-1/2'>
//         <RandomShapeGenerator />
//       </div>
//       <div className='relative mx-auto mt-24  w-[80%]'>
//         <ArticleDetailsContainer />
//       </div>
//     </div>
//   )
// }

// export default page



// import BlogDetailsContainer from "@/components/page/blog/blog-details/BlogDetailsContainer";

import axiosRequest from "@/lib/axiosRequest";
import { FC } from "react";
import { Metadata } from "next";
import ArticleDetailsContainer from "./_components/ArticleDetailsContainer";

interface ArticleDetailsType {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ArticleDetailsType): Promise<Metadata | undefined> {
  try {
    const data: any = await axiosRequest({
      url: `/article/${params?.slug}/`,
      method: "get",
    });

    return {
      title: data?.title || "Default Title",
      description: data?.short_description || "Default Description",
      keywords: data?.tag || "Default Keywords",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return undefined; // Explicitly return undefined
  }
}

const ArticleDetails: FC<ArticleDetailsType> = async ({ params }) => {

  console.log(params, 'params')
  try {
    const data: any = await axiosRequest({
      url: `/article/${params?.slug}/`,
      method: "get",
    });

    return (
      <div>
        <ArticleDetailsContainer data={data}  /> Pass fetched data
      </div>
    );
  } catch (error) {
    console.error("Error fetching article details:", error);
    return (
      <div>
        <p>Failed to load article details. Please try again later.</p>
      </div>
    );
  }
};

export default ArticleDetails;
