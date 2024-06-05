
import React from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity';

const HeroBanner = async () => {




  return (
    <div className="px-10 py-4 bg-gray-200 rounded-lg relative h-[500px] leading-9">
      <div>
        <p className='text-[20px] mt-50 text-black'>SMALL TEXT</p>
        <h3 className="text-5xl text-black font-bold">MID TEXT</h3>
        <img className="absolute top-0 right-20 w-45 h-45" src='' alt='headphones'/>

        <div>
          <Link href='/Product/ID'>
            <button type='button' className="rounded-lg px-4 py-2 mt-8 bg-red-500 text-white font-medium focus:outline-none hover:bg-red-700 z-10000">
              BUTTON TEXT</button>
          </Link>

          <div className="absolute right-10 bottom-5 w-30 lg:w-60 flex flex-col text-gray-700 leading-loose">
            <h5>DESCRIPTION</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default HeroBanner