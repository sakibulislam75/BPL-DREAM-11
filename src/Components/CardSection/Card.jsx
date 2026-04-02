import React, { use, useState } from 'react';
import Available from '../Available/Available';

const Card = ({ data }) => {
    const data1=use(data);
    const [selectedButton,setSelectedButton]=useState('available');
    return (
<>
<div className='flex justify-between items-center w-11/12 mx-auto mt-10'>
    <h2 className='text-3xl font-semibold'>Available Players</h2>
    <div className='flex items-center '>
        {/* button-toggling */}
        <button onClick={()=>setSelectedButton('available')} class={`btn  rounded-r-none rounded-l-2xl ${selectedButton === 'available' ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}>Available</button>
        <button onClick={()=>setSelectedButton('selected')} class={`btn  rounded-l-none rounded-r-2xl ${selectedButton === 'selected' ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}>Selected</button>

    </div>
</div>
        <div className='mt-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '>
        {
        data1.map(item=><Available key={item.id} player={item}></Available>)
        }
        </div>
        </>
    );
};

export default Card;