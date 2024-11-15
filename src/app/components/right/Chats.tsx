"use client";

import FriendBox from "@/app/utilcomponents/FriendBox";
import PrimaryHeading from "@/app/utilcomponents/PrimaryHeading";
import React, { useEffect, useState } from "react";
import friend1 from "../../assets/pp7.png";

import friend6 from "../../assets/pp2.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateFriend } from "@/app/redux/slices/friendSlice";

const Chats = () => {
  interface Friend {
    id: number;
    username: string;
  }
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [allFriends, setAllFriends] = useState<Friend[]>([]);

  const handleFriendSelect = (friendId: number, friendName: string) => {
    console.log("Clicked on friend");
    dispatch(updateFriend({ friendId, friendName }));
  };

  useEffect(() => {
    const getFriends = async () => {
      const allFriends = await axios.get("/api/users/all", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAllFriends(allFriends.data);
      console.log(allFriends.data);
    };
    getFriends();
  }, []);

  return (
    <div className=" m-2 h-3/6 w-11/12 ">
      <PrimaryHeading data="Chats" />
      {allFriends.map((friend) => {
        return (
          <FriendBox
            url={friend6.src}
            name={friend.username}
            onClick={() => handleFriendSelect(friend.id, friend.username)}
          />
        );
      })}
    </div>
  );
};

export default Chats;
