"use client";

import CircularImage from "@/app/utilcomponents/CircularImage";
import React from "react";

import friendPic from "../../assets/pp4.png";

import { useSelector } from "react-redux";
import { rootState } from "../../redux/rootState";

const FriendChatBox = () => {
  const state = useSelector((state: rootState) => state);
  return (
    <div className="h-24 border-2 w-11/12 rounded-2xl border-black p-2 bg-green-200 m-2 flex justify-start items-center gap-2">
      <CircularImage url={friendPic.src} dim="70px" />
      <p className="font-mono text-3xl font-black text-black">
        {state.friend.friendName}
      </p>
    </div>
  );
};

export default FriendChatBox;
