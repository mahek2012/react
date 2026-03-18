import { useState } from "react";
import axios from "axios";

const ApiFetch = () => {

  const[Data1,setData1] = useState([]);
    const[Data2,setData2]= useState([]);
      const[Data3,setData3] = useState([]);

    // Method 1
    const Method1 = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((rawdata) => {
            return rawdata.json()
        })
        .then((data) => {
            console.log(data);
            return setData1(data);
        })
        .catch((err) => {
            console.log(err);
        })
    };

       // Method 2
    const Method2 = async () => {
       try{
          let response = await fetch('https://dummyjson.com/products?limit=10');
          let data = await response.json();
          console.log(data.products);
      return setData2(data.products);
       }catch(error){
        console.log(error);
       }
    };
    //Method3(Axios)
    const Method3 = async () => {
        //get ==> revice data only
        //post ==> send data only
        //patch ==> update data
        //delete ==> delete data

        let response = await axios.get("https://dummyjson.com/recipes?limit=10");
        console.log(response.data.recipes);
        setData3(response.data.recipes);
    };


  return (
    <>
        <section className="bg-red-100 w-full h-screen p-6 flex flex-col justify-center items-center gap-y-4">
            <h1 className="text-3xl font-bold">Method 1 : Fetch - then - then</h1>
            <div className="bg-black h-144 w-full rounded-md flex flex-wrap items-center justify-centerp-4 gap-4 overflow-auto">{Data1.map((user,idx)=>{
              return(
              <div key={idx} className="w-60 p-4 text-white font-bold rounded-xl bg-[#c30e48]"> 
                    <p><span className="font-bold">Name :</span >{user.name}</p> 
                     <p><span className="font-bold">Email :</span >{user.email} </p>
                      <p><span className="font-bold">Website :</span >{user.website}</p>
              </div>
              )
            })}</div>
            <button className="px-4 py-2 text-center rounded-md font-bold bg-red-950 w-36 active:bg-red-100 active:text-red-950 active:border active:border-red-950 active:font-bold active:scale-90 text-white cursor-pointer" onClick={Method1}>Get Data 1</button>
        </section>
        <section className="bg-blue-100 w-full h-screen p-6 flex flex-col justify-center items-center gap-y-4">
            <h1 className="text-3xl font-bold">Method 2 : Async Await</h1> 
            <div className="bg-black h-144 w-full rounded-md flex flex-wrap items-center justify-center gap-4 overflow-auto p-4">{Data2.map((product ,idx )=>{
              return(
                <div key={idx} className="w-72 rounded-md bg-[#222] text-white p-4 relative ">
                  <img src={product.images[0]} alt="product" className="w-full h-auto rounded-2xl bg-[#555]"/>
                  <div className="flex items-center justify-between p-4">
                    <h1 className="text-sm font-bold">{product.title}</h1>
                      <h1 className="text-nowrap bg-[#555] p-2 rounded-md">${product.price}</h1>
                  </div>
                  <p className="bg-blue-300 font-bold absolute py-1 px-3 top-4 rounded-tr-md rounded-br-md rounded-tl-xl left-4">{product.brand}</p>
                </div>
              )
            })}
            </div>
            <button className="px-4 py-2 text-center rounded-md font-bold bg-green-700 w-36 active:bg-blue-100 active:text-blue-950
             active:border active:border-blue-950
             active:font-bold active:scale-90 text-white cursor-pointer" onClick={Method2}>Get Data 2</button>
        </section>
        <section className="bg-green-100 w-full h-screen p-6 flex flex-col justify-center items-center gap-y-4">
            <h1 className="text-3xl font-bold">Method 3 : Axios(Async Await)</h1>
            <div className="bg-black h-144 w-full rounded-md flex flex-wrap items-center justify-center gap-4 p-6 overflow-auto">
                {Data3.map((rec, idx)=> {
                    return (
                        <div key={idx} className="text-white rounded-2xl bg-[#222] p-4 w-72">
                            <img src={rec.image} alt="img" className="w-full rounded-md hover:rounded-full transition-all hover:rotate-360  duration-100"/>
                            <div className="p-4 my-2 bg-[#444] rounded-md h-32">
                                <h1 className="text-xl text-center font-bold">{rec.name}</h1>
                                <h1 className="bg-red-500 text-center py-1 px-4 font-semibold rounded-xl">{rec.rating}/5.0</h1>
                            </div>
                        </div>

                    )
                })}
            </div>
            <button className="px-4 py-2 text-center rounded-md font-bold bg-green-950 w-36 active:bg-green-100 active:text-green-950
             active:border active:border-green-950 active:font-bold active:scale-90 text-white cursor-pointer" onClick={Method3}>Get Data 3</button>
        </section>    
    </>
  )
}

export default ApiFetch