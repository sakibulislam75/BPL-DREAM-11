import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';


const SelectedPlayerCart = ({setSelectedPlayers, selectedPlayers, player,coin,setCoin}) => {
    const DeleteSelectedPlayer=(player)=>{
/* যাদের id clicked player.id এর সাথে মিলবে না, শুধু তাদের রাখো
 আর যাদের id মিলবে, তাদের বাদ দাও */
    setSelectedPlayers(selectedPlayers.filter(SelectedPlayerCart=>SelectedPlayerCart.id !== player.id));
     setCoin(Number(coin) + Number(player.price));//upadate coin after deselecting player
     toast.info(`You are Deleting ${player.player_name}. Refunded $${player.price}. Remaining coins: $${Number(coin) + Number(player.price)}`);
    }
    return (
        <>
       
      <div className=' border border-gray-300 rounded-md p-4 flex justify-between items-center'>
            <div className='flex gap-4 items-center'> 
            <span><img src={player.img} alt={player.player_name} className=' w-[200px] h-auto rounded-md '/></span>
           <span>
             <h1 className='text-2xl font-bold flex gap-1.5 items-center'><FaUser></FaUser> {player.player_name} </h1>
             <h2 className='text-lg font-medium'>{player.type}</h2>
                <h2 className='text-lg font-medium'>{player.country}</h2>
            <h2 className='text-l font-bold'>Price: ${player.price}</h2>
           </span>
            </div>
            <div className='text-2xl  text-red-500 cursor-pointer flex'>
                <button onClick={()=>DeleteSelectedPlayer(player)}><MdDelete></MdDelete></button>
            </div>
        </div>
        </>
    );
};

export default SelectedPlayerCart;