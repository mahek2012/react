import React, { useEffect, useState } from "react";
import { Clock, Users, Flame, ChefHat, Star, Receipt } from "lucide-react";
import axios from "axios";

const UseEffect = () => {
  const [index, setIndex] = useState(1);
   const [recipe, setRecipes] = useState(null);

useEffect(()=>{
    const getRecipes = async () => {
    let data = await axios.get(`https://dummyjson.com/recipes/${index}`);
    console.log(data.data);
    setRecipes(data.data);
  };
    getRecipes();
},[index]);


  return (
    <>
        
       <section className="flex items-center justify-between p-6">
        <button className="bg-orange-400 text-white py-4 px-2 font-bold rounded-md active:bg-orange-100 active:scale-95 active:text-orange-400" onClick={()=> {
                setIndex(index - 1);
        }}>Prev</button>
         <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row mt-10"
        >
          {/* Sidebar Image Section */}
          <div className="lg:w-1/3 relative bg-slate-100">
            <img
              src={recipe?.image}
              alt={recipe?.name}
              className="w-full h-full object-cover min-h-300px"
            />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded shadow-sm text-xs font-bold uppercase tracking-wider text-slate-700">
              {recipe?.cuisine}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3 p-8 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  {recipe?.name}
                </h2>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star size={16} fill="currentColor" /> {recipe?.rating}
                  </span>
                  <span className="text-slate-400">
                    ({recipe?.reviewCount} Reviews)
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px] font-bold uppercase">
                    {recipe?.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Prep Time
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {recipe?.prepTimeMinutes} mins
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <ChefHat size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Cook Time
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {recipe?.cookTimeMinutes} mins
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Servings
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {recipe?.servings} People
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <Flame size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Calories
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {recipe?.caloriesPerServing} kcal
                  </p>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="grid md:grid-cols-2 gap-10 mt-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  Ingredients
                </h3>
                <ul className="space-y-3">
                  {recipe?.ingredients?.map((ingredient, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Steps</h3>
                <div className="space-y-4">
                  {recipe?.instructions?.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-xs font-black text-slate-300 mt-1 uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-slate-50 pl-4">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-orange-400 text-white py-4 px-2 font-bold rounded-md active:bg-orange-100 active:scale-95 active:text-orange-400" onClick={()=> {
                setIndex(index + 1);
        }}>Next</button>
       </section>
    </>
  );
};

export default UseEffect;
