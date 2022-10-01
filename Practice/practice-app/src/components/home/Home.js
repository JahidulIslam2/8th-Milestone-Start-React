import React, { useEffect, useState } from 'react';
import Players from '../PLayers/Players';
import './Home.css'

const Home = () => {
    const [players,setPlayers]=useState([])
    const [Search,setSearch]=useState("")
    const [cart,setcart]=useState([])       //data arrived form player
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${Search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))
    },[Search])

        const deleteHandler=(id)=>{
            const restPlayer=cart.filter(p => p.idPlayer !== id)
            setcart(restPlayer)
             
        }
    return (
        <div className='container'>

            <div className='container-main'>
                <h1>Main Body</h1>
                <input className='input-src' onChange={(e)=> setSearch(e.target.value)} type="text" name="" id="" />
                <button className='btn-name' type="submit">Search Player</button>
                <Players 
                players={players} 
                cart={cart} 
                setcart={setcart}
                ></Players>
            </div>
            {/* add data come form player,bring use state cart */}
            <div className='container-cart'>
                <h1>Add Player</h1>
                    {
                        cart.map(p => <div className='player-card'>
                            <h4>{p.strPlayer} <button onClick={()=>deleteHandler(p.idPlayer)} className='btn-delete' type="submit">❌</button></h4>
                        </div>)
                    }
                

            </div>
        </div>
    );
};

export default Home;