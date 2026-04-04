import React, { use, useState } from 'react';
import Cart from './Cart';
import SelectedPlayer from './SelectedPlayer';
const Available = ({ data ,coin,setCoin}) => {
    const data1=use(data);//TOATAL DATA
    const [selectedButton,setSelectedButton]=useState('available');
    const[selectedPlayers,setSelectedPlayers]=useState([]);
    const handleSelectPlayer=(player)=>{
        setSelectedPlayers([...selectedPlayers,player]);
    }
    return (
<>
<div className='flex justify-between items-center w-11/12 mx-auto mt-10'>
   {
    selectedButton === 'available' ? <h2 className='text-2xl font-bold'>Available Players</h2> : <h2 className='text-2xl font-bold'>Selected Players ({selectedPlayers.length}/{data1.length})</h2>
   }
    <div className='flex items-center '>
        {/* button-toggling */}
        <button onClick={()=>setSelectedButton('available')} class={`btn  rounded-r-none rounded-l-2xl ${selectedButton === 'available' ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}>Available</button>
        <button onClick={()=>setSelectedButton('selected')} class={`btn  rounded-l-none rounded-r-2xl ${selectedButton === 'selected' ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}>Selected ({selectedPlayers.length})</button>

    </div>
     
</div>
      <div  >
     {
        selectedButton === 'available' ?<div className='mt-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ' >{data1.map(item=><Cart key={item.id} player={item} coin={coin} setCoin={setCoin}  handleSelectPlayer={handleSelectPlayer} ></Cart>)}</div> : <SelectedPlayer  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} ></SelectedPlayer>
     }  
     
        </div>
         
        </>
    );
};

export default Available;