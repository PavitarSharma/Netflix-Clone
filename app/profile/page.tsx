"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Profile = () => {
  const session = useSession();
  const router = useRouter();
  const { data: user } = useCurrentUser();

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.replace("/auth");
    }
  }, [session, router]);

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push("/browse")}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
              w-40
              h-40
              rounded-md
              flex
              items-center
              justify-center
              border-2
              border-transparent
              group-hover:cursor-pointer
              group-hover:border-white
              overflow-hidden
              
              "
              >
                <Image
                  src="/images/default-blue.png"
                  alt="profile"
                  width={160}
                  height={160}
                />
              </div>

              <div
                className="
              mt-4
              text-gray-400
              text-lg
              text-center
              group-hover:text-white
              "
              >
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
