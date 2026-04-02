import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Cart = ({player}) => {
    return (
       <div className="card bg-base-100  shadow-sm ">
  <figure>
    <img
      src={player.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser> {player.player_name}</h2>
  <span className='flex justify-between'>
    <h2 className='flex gap-1 items-center'><FaFlag></FaFlag> {player.country}</h2>
    <button className='btn bg-gray-100'>{player.type}</button>
  </span>
 <hr className=" border-gray-300 opacity-90" />
 <h2 className='font-semibold'>Rating</h2>
 <div className='flex justify-between items-center'>
   <h2 className='font-bold'>{player.batting_hand}</h2> 
   <button className='btn'>{player.batting_hand}</button>
 </div>
    <div className="card-actions justify-between items-center">
        <h2 className='font-bold'>Price : ${player.price}</h2>
      <button className="btn">Choose</button>
    </div>
  </div>
</div>
    );
};

export default Cart;