"use client";
import HomeContainer from "@/components/page/home/HomeContainer";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

const Page = () => {
  // const { something } = useContext(AuthContext);
  // console.log("something");
  return (
    <div className="home_bg flex items-center  justify-center">
      <HomeContainer />
    </div>
  );
};

export default Page;
