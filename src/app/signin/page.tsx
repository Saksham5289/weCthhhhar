"use client";

import React, { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleOnCLick = async () => {
    try {
      const resp = await axios.post("/api/signin", {
        username,
        password,
      });
      console.log(resp.data);
      if (typeof window !== "undefined") {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("username", resp.data.user.username);
        localStorage.setItem("id", resp.data.user.id);
      }
      router.push("/chat");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="h-screen w-screen bg-slate-100  flex items-center justify-center">
      <div className="h-1/3 w-3/12 border rounded bg-white border-zinc-950 flex flex-col p-5 gap-10">
        <p className="text-4xl font-extrabold">Sign In</p>
        <input
          className="w-3/4 border-b focus:outline-none"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-3/4 border-b focus:outline-none"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-4">
          <button
            className="text-2xl w-48 text-white bg-green-500 border rounded "
            onClick={() => handleOnCLick()}
          >
            Submit
          </button>

          <button
            className="text-2xl w-48 text-white bg-black border rounded "
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
