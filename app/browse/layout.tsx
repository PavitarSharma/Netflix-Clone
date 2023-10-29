"use client";
import Navbar from "@/components/navbar/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NetflixHome = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const router = useRouter();

  return (
    <>
      {/* <Navbar /> */}
      <main className="">{children}</main>
    </>
  );
};

export default NetflixHome;
