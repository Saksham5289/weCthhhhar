import React from "react";

import CircularImage from "./CircularImage";

import SmallText from "./SmallText";

interface FriendBoxType {
  url: string;
  name: string;
  onClick?: () => void; // Optional click handler for the box
}

const FriendBox = ({ url, name, onClick }: FriendBoxType) => {
  return (
    <div
      className=" h-16 w-11/12 flex justify-start gap-2 items-center"
      onClick={onClick}
    >
      <CircularImage url={url} dim="35px" />
      <SmallText data={name} />
    </div>
  );
};

export default FriendBox;
