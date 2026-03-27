import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Product = () => {
  const [data,setData] = useState({});

  const params = useParams();
  console.log(params.id);

  useEffect(()=>{
    const ProductData = async () => {
      try {
        let response = await axios.get(`https://dummyjson.com/products/${params.id}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    ProductData();
  },[params.id]);
  
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center p-24">
        {/* image  */}
        <div className="w-1/2 relative flex items-center justify-center ">
          <img src={data.images?.[0]} alt="image" />
          <div className="bg-[#6f4518]/30 w-140 h-140 rounded-full absolute  -z-10"></div>
        </div>
        {/* contant */}
        <div className="w-1/2 p-6">
          <h1 className="text-7xl font-extrabold pt-4">{data.title}</h1>
          <h2 className="text-2xl font-bold text-[#6f4519]/30 pb-6">
            {data.category}
          </h2>
          <p className="text-6xl font-bold py-6">{data.price}</p>
          <p className="text-2xl py-8 ">{data.description}</p>
          <div className="flex items-center justify-center gap-24">
            <button className="bg-white/15 text-[#6f4518] border border-[#6f4518] active:scale-95 hover:text-[#6f4518] transition-all duration-300 hover:bg-white/10 w-1/2 px-6 py-3 text-xl font-semibold rounded-md">
              Add to Bag
            </button>
            <button className="bg-white/15 text-[#6f4518] border border-[#6f4518] active:scale-95 hover:text-[#6f4518] transition-all duration-300 hover:bg-white/10 w-1/2 px-6 py-3 text-xl font-semibold rounded-md">
              Favourite
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
