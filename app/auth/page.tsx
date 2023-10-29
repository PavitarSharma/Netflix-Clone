"use client";

import Input from "@/components/Input";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useCallback, useEffect, useState } from "react";
import { FormFileds } from "@/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "@/utils/validationSchema";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const AuthPage = () => {
  const router = useRouter();
  const [variant, setVariant] = useState("signIn");
  const session = useSession();

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.replace("/browse");
    }
  }, [session, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFileds>({
    resolver: yupResolver(variant === "signIn" ? loginSchema : registerSchema),
  });

  const login = async (data: any) => {
    try {
      const { email, password } = data;

      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profile",
      });

      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (data: any) => {
    try {
      await axios.post("/api/register", data);
      login(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<FormFileds> = (data) => {
    const { email, password, username } = data;
    if (variant === "signIn") {
      const loginBody = {
        email,
        password,
      };

      login(loginBody);
    } else {
      const registerBody = {
        username,
        email,
        password,
      };

      signUp(registerBody);
    }
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "signIn" ? "signUp" : "signIn"
    );
  }, []);

  return (
    <div
      className="
      relative 
      min-h-screen 
      w-full 
      bg-[url('/images/hero.jpg')] 
      bg-no-repeat 
      bg-center 
      bg-fixed 
      bg-cover 
      z-10 
      
      before:content-['']
      before:absolute
      before:inset-0
      before:bg-black
      before:md:bg-opacity-50
      before:z-[-5]
      "
    >
      <nav className="px-12 py-5 flex items-center justify-between">
        <Image src="/images/logo.png" alt="logo" width={180} height={180} />
      </nav>

      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 md:max-w-md rounded-md w-full px-16 py-16 self-center mt-2">
          <h1 className="text-white font-semibold text-4xl mb-8">
            {variant === "signIn" ? "Sign In" : "Create an account"}
          </h1>

          {/* Login */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-6"
          >
            {variant === "signUp" && ( // Render this block if the variant is "signUp"
              <>
                <Input
                  error={errors.username}
                  name="username"
                  id="username"
                  label="Username"
                  type="text"
                  register={register}
                />
              </>
            )}
            <Input
              error={errors.email}
              name="email"
              id="email"
              label="Email"
              type="email"
              register={register}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              register={register}
              name="password"
              error={errors.password}
            />

            <button
              type="submit"
              className="bg-red-600 w-full py-3 text-white rounded-md mt-6 hover:bg-red-700 transition font-medium"
            >
              {variant === "signIn" ? "Sign In" : "Sign Up"}
            </button>

            <div className="flex items-center gap-4 justify-center mt-8">
              <button
                onClick={() => signIn("google", { callbackUrl: "/profile" })}
                type="button"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </button>
              <button
                onClick={() => signIn("github", { callbackUrl: "/profile" })}
                type="button"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition text-black"
              >
                <FaGithub size={30} />
              </button>
            </div>
          </form>

          <p className="text-neutral-500 mt-20">
            {variant === "signIn"
              ? "New to Netflix?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "signIn" ? "Sign up now" : "Sign In"}
            </span>
            .
          </p>
        </div>
      </div>

      <footer className="bg-black bg-opacity-70 mt-24 md:border-0 border-t-4 border-t-zinc-600">
        <div className="mx-auto max-w-[1700px] w-full py-14 px-4 text-zinc-500">
          <h3 className="text-lg">
            Questions? Call{" "}
            <a className="underline" href="tel:000-800-919-1694">
              000-800-919-1694
            </a>
          </h3>

          <div className="grid md:grid-cols-4 grid-cols-2 py-4">
            <ul>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  FAQ
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Cookie Preferences
                </a>
              </li>
            </ul>

            <ul>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Help Centre
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Corporate Information
                </a>
              </li>
            </ul>

            <ul>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Terms of Use
                </a>
              </li>
            </ul>

            <ul>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
