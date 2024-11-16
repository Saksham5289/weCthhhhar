"use client";

import CircularImage from "@/app/utilcomponents/CircularImage";
import React from "react";
import userProfilePic from "../../assets/pp2.png";
import SecondaryHeading from "@/app/utilcomponents/SecondaryHeading";
import SmallText from "@/app/utilcomponents/SmallText";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/rootState";

const ProfileSection = () => {
  const state = useSelector((state: rootState) => state);
  return (
    <div className=" m-2 flex flex-col items-center justify-center  h-36 w-11/12">
      <CircularImage url={userProfilePic.src} dim="80px" />
      <SecondaryHeading data={state.user.username} />
      <SmallText data="Software Developer" />
    </div>
  );
};

export default ProfileSection;
