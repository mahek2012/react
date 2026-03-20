import React from "react";
import { Focus, Search, Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center gap-20">
        <div>
          <h1 className="text-4xl font-bold py-2 ">Unsplash</h1>
          <p className="text-lg">
            The internet&apos;s source for visuals. <br /> Powered by creators
            everywhere.
          </p>
          <div className="bg-gray-200 my-4 px-3 py-3 flex items-center justify-between gap-x-2 rounded-full w-[75%]">
            <Search className="w-5  h-5 text-gray-600  " strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search photos and illustrations"
              className="w-full focus:outline-none"
            />
            <Focus className="w-5  h-5 text-gray-600  " strokeWidth={2.5} />
          </div>
        </div>
        <div className="border border-black/20 rounded-md p-4 flex items-center justify-center gap-20">
        {/* text */}
        <div>
            
 <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false" className="flex-0"><desc lang="en-US">Plus sign for Unsplash+</desc><path d="M11.281 8.3H8.156V3.125L11.281 1v7.3Zm.316 4.05H4.955V7.868L1.5 10.636v4.55h6.656V22h4.713l3.552-2.84h-4.824v-6.81Zm4.24 0v2.835h4.587l2.911-2.834h-7.497Z"></path></svg>
            <p className="mt-3 font-bold text-lg leading-5">
                Create confidently strokeWidth
                <br />
                enhanced legal protection.
            </p>
            <p className="mt-2 font-bold text-lg leading-5 text-gray-500">
                Premium downloads
                <br />
                backed by full coverage.
            </p>
            <button className="mt-10 bg-black text-white py-1 px-3 rounded-lg font-medium">Get Unaplash+</button>
        </div>
        {/* image */}
        <div>
           <div><img src="https://unsplash-assets.imgix.net/modules/legal-protections/photo-1.jpg?w=192&dpr=1&h=257&auto=format&fit=crop&q=60" alt="" className="-rotate-6"/></div> 
        </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
