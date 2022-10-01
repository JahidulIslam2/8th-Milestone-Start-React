import React  from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({players,cart,setcart}) => {
    
    return (
        <div className='players-container'>
            {
                players.map(player => 
                <Player 
                    player={player} 
                    key={player.idPlayer} 
                    cart={cart}
                    setcart={setcart}
                    ></Player>)
            }        
        </div>
    );
};

export default Players;