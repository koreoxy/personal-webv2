import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="bg-light border border-black rounded-md p-5 shadow-[10px_10px_black]">
      <div className="flex flex-col lg:flex-row justify-between mx-5">
        <div className="font-bold text-[28px] md:text-[48px] hidden md:block">
          <h1>Hello</h1>
          <h1>
            I&apos;m{" "}
            <b className="bg-light border border-black p-1 transform rotate-0 -skew-x-3 shadow-[10px_10px_black]">
              Saifull
            </b>
          </h1>
          <h1>Fullstack Web Developer</h1>
          <h1>From Indonesia</h1>
        </div>

        <div className="font-bold text-[28px] md:hidden">
          <p>
            Hello I&apos;m{" "}
            <b className="bg-light border border-black p-1 transform rotate-0 -skew-x-3 shadow-[10px_10px_black] mr-2">
              Saifull
            </b>{" "}
            Fullstack Web Developer From Indonesia
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="bg-light border border-black p-5 transform rotate-0 -skew-x-3 shadow-[10px_10px_black]">
            <div className="w-[173px] sm:w-[273px] md:w-[373px] lg:w-[473px] h-[162px] lg:h-full">
              <Image
                src="/ginko.jpg"
                alt="image-hero"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-light border border-black p-5 transform rotate-0 -skew-x-3 shadow-[10px_10px_black]">
            <div className="w-full md:h-full">
              <div className="flex flex-row lg:flex-col gap-5 items-center text-center justify-center lg:mx-0 my-[-10px] lg:my-6">
                <BsInstagram size={30} />
                <AiOutlineYoutube size={30} />
                <FaGithub size={30} />
                <FaXTwitter size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
