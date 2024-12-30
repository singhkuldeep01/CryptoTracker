import React from 'react'
import BannerImage from '../../assets/Banner.jpg'
function Banner() {
  return (
    <>
        <div className='w-full h-[25rem] relative'>
            <img 
                src = {BannerImage}
                className='w-full h-full object-cover object-top'
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-4'> 
                <h1 className='text-4xl text-white font-bold tracking-wide'>Crypto Tracker</h1>
                <p className='text-white text-xl'>Track your favorite cryptocurrencies</p>
            </div>

        </div>
    </>
  ) 
}

export default Banner