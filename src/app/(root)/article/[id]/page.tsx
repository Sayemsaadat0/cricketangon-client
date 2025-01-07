// import RandomShapeGenerator from '@/components/core/RandomShapeGenerator'
// import React from 'react'
// import ArticleDetailsContainer from './_components/ArticleDetailsContainer'

// const page = () => {
//   return (
// <div className="crick-Container relative  ">
//   <div className='mt-10 max-w-7xl overflow-hidden mx-auto fixed  w-full top-0 left-1/2 -translate-x-1/2'>
//     <RandomShapeGenerator />
//   </div>
//   <div className='relative mx-auto mt-24  w-[80%]'>
//     <ArticleDetailsContainer />
//   </div>
// </div>
//   )
// }

// export default page

// import BlogDetailsContainer from "@/components/page/blog/blog-details/BlogDetailsContainer";

// import axiosRequest from "@/lib/axiosRequest";
// import { FC } from "react";
// import { Metadata } from "next";

// interface ArticleDetailsType {
//     params: { id: number };
// }

// const ArticleDetails: FC<ArticleDetailsType> = async ({ params }) => {

//     console.log(params, 'adasdasdsadasdsdsasdasdasda')
//     try {
//         const data: any = await axiosRequest({
//             url: `/article/${params?.id}/`,
//             method: "get",
//         });
//         return (
//             <div>
//                 hello
//                 {/* <ArticleDetailsContainer  />  */}
//             </div>
//         );
//     } catch (error) {
//         console.error("Error fetching article details:", error);
//         return (
//             <div>
//                 <p>Failed to load article details. Please try again later.</p>
//             </div>
//         );
//     }
// };

// export default ArticleDetails;

import RandomShapeGenerator from "@/components/core/RandomShapeGenerator";
import axiosRequest from "@/lib/axiosRequest";
import ArticleDetailsContainer from "./_components/ArticleDetailsContainer";

interface Props {
  params: { id: number };
}

const page = async ({ params }: Props) => {
  const { id } = params;

  console.log(id);
  try {
    const data = await axiosRequest({
      url: `/article/${id}/`,
      method: "get",
    });
    console.log("Fetched data:", data);

    return (
      <div className="crick-Container relative  ">
        <div className="mt-10 max-w-7xl overflow-hidden mx-auto fixed  w-full top-0 left-1/2 -translate-x-1/2">
          <RandomShapeGenerator />
        </div>
        <div className="relative mx-auto mt-24  w-[80%]">
          <ArticleDetailsContainer data={data} />
        </div>
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

export default page;
