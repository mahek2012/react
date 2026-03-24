import React, { useEffect, useState } from 'react'
import {ArrowDown,Bookmark,PlusIcon} from "lucide-react";
import axios from "axios";

const Gallery = () => {
    const [img,setImg] = useState ([]);

    useEffect(() => {
        const FetchImages = async () => {
            try {
                let response = await axios.get("https://picsum.photos/v2/list?page=1&limit=100");
                console.log(response.data);
                setImg(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        FetchImages();
    },[]);

  return (
    <>
    <section>
        <div className='columns-1 sm:columns-2 md:columns-3 gap-4 p-4'>
            {img.map((data,id)=>{
                return(
                <div className='relative mb-4 break-inside-avoid shadow group' key={id}>
                <img src={data.download_url} alt='image' className='w-full object-cover '/>
            <div className='absolute top-0 bg-black/10 inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <div className='flex justify-end gap-x-2'>
                <div className='bg-white p-2 rounded-md'><Bookmark /></div>
                <div className='bg-white p-2 rounded-md'><PlusIcon/></div>
            </div>
            {/* bottom icon */}
            <div className='flex justify-between items-center'>
                <h2 className='text-white font-bold'>{data.author}</h2>
                <div className='bg-white p-2 rounded-md'><ArrowDown/></div>
            </div>
            </div>
            </div>
                )
            })}
            {/* image */}
        </div>
    </section>
    </>
  )
}

export default Gallery
