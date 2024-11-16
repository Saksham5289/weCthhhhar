"use client";

import FriendBox from "@/app/utilcomponents/FriendBox";
import PrimaryHeading from "@/app/utilcomponents/PrimaryHeading";
import React, { useEffect, useState } from "react";

import friend6 from "../../assets/pp2.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFriend } from "../../redux/slices/friendSlice";

const Chats = () => {
  interface Friend {
    id: number;
    username: string;
  }
  const dispatch = useDispatch();

  const [allFriends, setAllFriends] = useState<Friend[]>([]);

  const handleFriendSelect = (friendId: number, friendName: string) => {
    console.log("Clicked on friend");
    dispatch(updateFriend({ friendId, friendName }));
  };
  let myvar: any = null;
  if (typeof window !== "undefined") {
    myvar = localStorage.getItem("token");
  }
  useEffect(() => {
    const getFriends = async () => {
      const allFriends = await axios.get("/api/users/all", {
        headers: {
          authorization: `Bearer ${myvar}`,
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
            key={friend.id}
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
