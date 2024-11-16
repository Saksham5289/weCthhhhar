"use client";

import { rootState } from "@/app/redux/rootState";
import axios from "axios";
import React, { useState } from "react";

import { ArrowRight } from "react-feather";
import { useSelector } from "react-redux";

const CenterBottom = () => {
  let myvar: any = null;
  if (typeof window !== "undefined") {
    myvar = localStorage.getItem("token");
  }
  const state = useSelector((state: rootState) => state);
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    const response = await axios.post(
      "/api/messages",
      {
        senderId: state.user.userId, //remove this & extract in server side
        receiverId: state.friend.friendId,
        text: message,
      },
      {
        headers: {
          authorization: `Bearer ${myvar}`,
        },
      }
    );
    setMessage("");
    console.log(response.data, "Message sent successfully"); // Here you can add the logic to display the message in the chat box.
  };
  return (
    <div className="border-2 w-11/12 h-12 rounded-2xl p-2 flex justify-between bg-amber-200">
      <input
        type="text"
        className=" bg-transparent outline-none w-10/12"
        placeholder="Please Enter Your Text .."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="w-8 h-8 flex justify-center rounded-full items-center bg-amber-500">
        <ArrowRight onClick={() => handleSubmit()} />
      </div>
    </div>
  );
};

export default CenterBottom;
