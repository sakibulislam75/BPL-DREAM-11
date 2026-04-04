import React from 'react';
import SelectedPlayerCart from './SelectedPlayerCart';
const SelectedPlayer = ({ selectedPlayers, setSelectedPlayers ,coin,setCoin}) => {
    return (
             <div className='w-11/12 my-6 mx-auto grid grid-cols-1 gap-3' >
       {
        selectedPlayers==0?<div className='text-center my-15 space-y-2'><h1 className='text-3xl text-gray-500 font-semibold'>No Players Selected Yet!</h1>
        <h2 className='text-gray-400'>Go To Avaialbale Tab To Select Your Players</h2>
        </div>:
        selectedPlayers.map(player=><SelectedPlayerCart key={player.id} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayerCart>)
       }
        </div>
    );
};

export default SelectedPlayer;