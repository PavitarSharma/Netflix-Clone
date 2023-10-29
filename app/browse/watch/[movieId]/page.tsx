"use client";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const WatchMovie = ({ params }: { params: { movieId: string } }) => {
  const { movieId } = params;
  const router = useRouter();
  const { data } = useMovie(movieId as string);
  console.log(data);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/browse")}
          className="text-white cursor-pointer"
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light mr-2">Watching:</span>
          {data?.title}
        </p>
      </nav>

      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </div>
  );
};

export default WatchMovie;
