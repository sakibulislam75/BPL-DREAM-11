import React, { useState } from 'react';
import bannerImg from '../../assets/bg-shadow.png'
import mainImg from '../../assets/banner-main.png'
import { toast } from 'react-toastify';
const Banner = ({coin,setCoin}) => {
  const [creditClaimed, setCreditClaimed] = useState(false);
  const handleClaimCredit=()=>{
 setCoin(coin+100);
 setCreditClaimed(true);
 toast.success('You have claimed 100 credits! Your new balance is $' + Number(coin + 100));
  }
  return (
    <div className=" bg-cover w-11/12 mx-auto h-[500px] bg-black rounded-md "
      style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='flex-col text-center items-center  '>
        <img src={mainImg} alt="Main Banner" className='pt-17 mx-auto' />
        <h1 className='text-3xl font-semibold my-2 text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h3 className='text-lg text-gray-300'>Beyond Boundaries Beyond Limits</h3>
        <div className="w-fit border border-[#E7FE29] rounded-md p-1.5 bg-transparent mt-4 mx-auto">
          <button className="bg-[#E7FE29] px-3 py-2 font-bold rounded-md btn "onClick={handleClaimCredit} disabled={creditClaimed}>
         {creditClaimed? 'Credit Claimed':'Claim 100 Credit'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;