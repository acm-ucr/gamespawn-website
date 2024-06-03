import React from "react";
import Image from "next/image";
import landingleft from "@/public/assets/home/landingLeft.webp";
import landingright from "@/public/assets/home/landingRight.webp";
import Button from "/src/components/Button.js";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex justify-center items-center w-full h-[60vh] lg:h-[80vh] ">
      <div className="hidden transition-opacity lg:block lg:w-2/12">
        <Image alt="left" src={landingleft} class="animate-fadeIn" />
      </div>
      <div className="text-center lg:w-6/12">
        <div className="font-monda text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">
          Welcome to
        </div>
        <div className="font-russo text-5xl sm:text-8xl mb-2">GAMESPAWN</div>
        <div className="font-monda text-xl sm:text-4xl mb-16 ">
          {" "}
          UCR&#39;s game development club
        </div>
        <Link href="https://discord.com/invite/ejzg2Wb">
          <Button text="join us" background="bg-game-blue-200" />
        </Link>
      </div>
      <div className="hidden lg:block lg:w-2/12">
        <Image
          className=""
          alt="right"
          src={landingright}
          class="animate-fadeIn"
        />
      </div>
    </div>
  );
};

export default Landing;
