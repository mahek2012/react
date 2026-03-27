import { ArrowRight, BadgePercent } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[#cebdb5] h-136 overflow-hidden flex items-center justify-between px-6 w-full">
        <div className="w-1/2 pl-10">
          {/* sale  */}
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 text-xl">
            <div className="flex items-center justify-center gap-x-2">
              <BadgePercent fill="#7f5539" className="text-white w-8 h-8" />
              <span className="font-semibold">50% OFF </span> Summer Super Sale
            </div>
          </div>

          {/* title */}
          <h1 className="text-5xl font-medium leading-relaxed">
            Step into Style : Your
            <br />
            Ultimate Fashion Destination
          </h1>

          {/* description */}
          <p className="text-xl font-noraml leading-normal text-black/60">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab  <br /> vel nihil quaerat illum qui? Natus.
          </p>

          {/* button */}
          <button className="bg-[#583101] flex items-center justify-center text-white px-6 py-3 my-4 gap-x-4 active:scale-95  active:rounded-md">
            Show Now <ArrowRight />
          </button>
        </div>

        <img
          src="/hero.jpg"
          alt="hero-img"
          className="w-1/2 object-cover -mt-5 scale-85 rotate-y-180"
        />
      </section>
    </>
  );
};

export default Hero;
