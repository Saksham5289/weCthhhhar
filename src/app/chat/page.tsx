import React from "react";
import LeftBar from "../components/left/LeftBar";
import CenterBar from "../components/center/CenterBar";
import RightBar from "../components/right/RightBar";
export const dynamic = "force-dynamic";
const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-cyan-200 p-4">
      <div className=" h-full w-9/12  grid grid-cols-5 rounded-2xl">
        <LeftBar />
        <CenterBar />
        <RightBar />
      </div>
    </div>
  );
};

export default page;
