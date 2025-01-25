// "use client";

import HomeContainer from "@/components/page/home/HomeContainer";
// import React, { useEffect, useState } from "react";

const Page = () => {
  // const [articleData, setArticleData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/article/`, {
  //         next: { tags: ["homePage"] },
  //       });
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const data = await res.json();
  //       console.log(data)
  //       setArticleData(data);
  //     } catch (err: any) {
  //       setError(err.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) return <div>Error: {error}</div>;
  // if (!articleData) return <div>Loading...</div>;

  return (
    <div className="home_bg relative flex items-center justify-center">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Home container */}
      <HomeContainer />
    </div>

  );
};

export default Page;
