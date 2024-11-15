"use client";

import React, { useEffect, useState } from "react";
import SingleMessage from "./SingleMessage";
import Messages from "./DummyMessages";
import { useSelector } from "react-redux";
import { rootState } from "@/app/redux/rootState";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const MessagesComp = () => {
  interface Message {
    id: number;
    senderId: number;
    receiverId: number;
    text: string;
    createdAt: string;
  }
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const state = useSelector((state: rootState) => state);
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  useEffect(() => {
    const fetchAllMessages = async () => {
      const response = await axios.get(
        `/api/messages?friendId=${state.friend.friendId}`,
        {
          headers: {
            userId: state.user.userId,
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAllMessages(response.data);
      console.log(response.data, "All Messages");
    };
    fetchAllMessages();
    const handleInserts = (payload) => {
      const newMessage = payload.new;
      setAllMessages((prevMessage) => [...prevMessage, newMessage]);
    };
    supabase
      .channel("MessageTable")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Message" },
        handleInserts
      )
      .subscribe();
  }, [state.friend]);
  return (
    <div
      style={{ height: "640px", maxHeight: "640px" }}
      className=" w-11/12 border-2 gap-4 items-center rounded-2xl p-2 flex flex-col overflow-y-auto bg-green-400"
    >
      {allMessages.map((message) => {
        return (
          <SingleMessage
            key={message.id}
            text={message.text}
            isSender={message.senderId === state.user.userId}
          />
        ); // assuming id is unique for each message.
      })}
    </div>
  );
};

export default MessagesComp;
