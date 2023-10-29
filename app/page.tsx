/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/Container";
import Feature from "@/components/Feature";
import Banner from "@/components/landing/Banner";
import Faq from "@/components/landing/Faq";
import GetStartedButton from "@/components/landing/GetStartedButton";
import InputField from "@/components/landing/InputField";
import { faqs } from "@/utils/data";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const session = useSession();
  const router = useRouter();


  

  return (
    <div>
      <Banner />

      {/* Enjoy on your TV Start */}
      <section className="w-full bg-black border-t-8 border-t-zinc-600 py-[50px]">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <Feature
              title="Enjoy on your TV"
              description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            />
            <figure className="relative">
              <video
                className="absolute w-[80%] bottom-[20%] left-[10%] z-[1]"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src="/videos/video-tv.m4v" type="video/mp4" />
              </video>
              <img src="/images/tv.png" alt="tv" className="relative z-[2]" />
            </figure>
          </div>
        </Container>
      </section>

      {/* Download */}
      <section className="w-full bg-black border-t-8 border-t-zinc-600 py-[50px]">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <figure className="relative md:order-1 order-3">
              <video
                className="absolute w-[80%] bottom-[20%] left-[10%] z-[1]"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src="/videos/video-tv.m4v" type="video/mp4" />
              </video>
              <img
                src="/images/mobile.jpg"
                alt="tv"
                className="relative z-[2]"
              />
              <div className="md:w-[60%] w-[80%] absolute md:left-[20%] left-[10%] bottom-[6%] z-10 bg-black  border-2 border-zinc-500 rounded-md  grid grid-cols-[70%_auto]">
                <div className="grid grid-cols-[25%_auto] p-5 gap-3 items-center">
                  <img src="/images/boxshot.png" alt="boxshot" className="" />
                  <div className="text-white">
                    <h3> Stranger Things</h3>
                    <span className="text-blue-700 text-sm">
                      Downloading...
                    </span>
                  </div>
                </div>
                <div>
                  <img src="/images/download-icon.gif" alt="loading" />
                </div>
              </div>
            </figure>

            <div className="md:order-2 order-1">
              <Feature
                title="Download your shows to watch offline"
                description="Save your favourites easily and always have something to watch."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Watch Everywhere */}
      <section className="w-full bg-black border-t-8 border-t-zinc-600 py-[50px]">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8">
            <Feature
              title="Watch everywhere"
              description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            />
            <figure className="relative">
              <video
                className="absolute w-[60%] bottom-[40%] left-[20%] z-[1]"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src="/videos/video-devices.m4v" type="video/mp4" />
              </video>
              <img
                src="/images/device-pile.png"
                alt="device-pile"
                className="relative z-[2]"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Kids */}
      <section className="w-full bg-black border-t-8 border-t-zinc-600 py-[50px]">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
            <img
              src="/images/children-tv.png"
              alt="children-tv"
              className="relative z-[2] md:order-1 order-2"
            />
            <div className="md:order-2 order-1">
              <Feature
                title="Enjoy on your TV"
                description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQS */}
      <section className="w-full bg-black border-t-8 border-t-zinc-600 border-b-8 border-b-zinc-600">
        <Container>
          <h1 className="md:text-5xl text-[2rem] leading-[50px] text-center font-bold mb-4">
            Frequently Asked Questions
          </h1>
          {faqs.map((faq, index) => (
            <Faq key={index} faq={faq} />
          ))}

          <p className="text-center text-xl font-medium mt-12">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="max-w-[600px] mt-4 mx-auto">
            <form className="grid sm:grid-cols-[70%_auto] grid-cols-1 md:gap-2 gap-3">
              <InputField id="email" label="Email Address" />
              <GetStartedButton onClick={() => {}} />
            </form>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-[1700px] w-full py-14 px-4 text-zinc-400">
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
                  Investor Relations
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Privacy
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Speed Test
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
                  Jobs
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Cookie Preferences
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Legal Notices
                </a>
              </li>
            </ul>

            <ul>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Account
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Ways to Watch
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Corporate Information
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Only on Netflix
                </a>
              </li>
            </ul>

            <ul>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Media Centre
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Terms of Use
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline text-sm font-medium">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
