import { MdChevronRight } from "react-icons/md";
import Container from "../Container";
import InputField from "./InputField";
import GetStartedButton from "./GetStartedButton";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const error = false;
  const success = false;
  return (
    <div
      className="
relative 
w-full 
bg-[url('/images/landing-hero.jpg')] 
bg-no-repeat 
bg-center 
bg-fixed 
bg-cover 
z-10 
before:content-['']
before:absolute
before:inset-0
before:bg-gradient-to-t
before:from-black
before:via-transparent
before:to-black
before:z-[-5]
"
    >
      <nav className="px-12 py-5 flex items-center justify-between">
        <Image src="/images/logo.png" alt="logo" width={180} height={180} />
        <div>
          <Button
            label="Sign In"
            type="button"
            onPress={() => router.push("/auth")}
          />
        </div>
      </nav>
      <Container>
        <h1 className=" md:text-[45px] text-[30px] text-center font-bold">
          The biggest Indian hits. The best Indian stories. All streaming here.
        </h1>
        <h4 className="text-xl py-[15px] text-center">
          Watch anywhere. Cancel anytime.
        </h4>
        <p className="text-xl text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="max-w-[600px] mt-7 mx-auto">
          <form className="grid sm:grid-cols-[70%_auto] grid-cols-1 md:gap-2 gap-3">
            <InputField id="email" label="Email Address" />
            <GetStartedButton onClick={() => {}} />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
