import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    handleUrl();
  }, []);
  const handleUrl = async () => {
    const response = await fetch("/auth/google");
    const link = await response.url;
    console.log(link);
    setUrl(link);
  };

  const handleLoginClick = async () => {};
  return (
    <>
      <div className="mt-72   flex  justify-center">
        <h1 className="text-blue-500 text-2xl">Welcome To Gift Tracker App</h1>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <a
          href={url}
          target="_self"
          className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          onClick={handleLoginClick}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Login</span>
        </a>
      </div>
    </>
  );
}
