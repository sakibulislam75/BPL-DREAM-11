import React from 'react';
import bannerImg from '../../assets/bg-shadow.png'
import mainImg from '../../assets/banner-main.png'
const Banner = () => {
    return (
      <div className=" bg-cover w-11/12 mx-auto h-[500px] bg-black"
     style={{ backgroundImage: `url(${bannerImg})` }}>
    
   <div className='flex-col text-center items-center  '>
    <img src={mainImg} alt="Main Banner" className='pt-15 mx-auto'/>
    <h1 className='text-3xl font-semibold my-2 text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <h3 className='text-lg text-gray-300'>Beyond Boundaries Beyond Limits</h3>
    <button className='btn bg-yellow-500 btn-outline mt-4 border'>Claim Free Credit</button>
   </div>

 
</div>

    );
};

export default Banner;