import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
 import { ToastContainer, toast } from 'react-toastify';
const Cart = ({ player, coin, setCoin }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelect = () => {
        let newCoin = coin - player.price;
        if (isSelected) {
            toast.info(`You have deselected ${player.player_name}. Refunded $${player.price}. Remaining coins: $${Number(coin) + Number(player.price)}`);
            setIsSelected(false);
            setCoin(Number(coin) + Number(player.price));
            return;
        }
        else if (newCoin > 0) {
            setCoin(newCoin);

        }
        else {
            toast.error('You do not have enough coins to select this player.');
            return;
        }
        toast.success(`You have selected ${player.player_name} for $${player.price}. Remaining coins: $${newCoin}`);
        setIsSelected(true);
 
    }
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
                    <button className="btn" onClick={handleSelect}>{isSelected == true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
             
        </div>
        
    );
};

export default Cart;