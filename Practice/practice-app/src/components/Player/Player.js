import React from 'react';
import './Player.css';
// get form players
const Player = ({player,cart,setcart,key}) => {

    const{strPlayer,strNationality,dateBorn,strPosition,strSport,strCutout,idPlayer}=player;
// function for handler
    const addCarthandler=()=>{
        // const addInfo={
        //     strPlayer,
        //     strNationality,
        //     strPosition,
        //     strSport,
        //     idPlayer
        // }
        // if(addInfo){
        //     const newCart=[...cart,addInfo]     //cart er moddho ager value ache,add info er //moddho new value, ager value ar new value add kore newCart e obj akare jabe
        //     setcart(newCart)
        // }
        
    }
    // get from local storage and add localstorage
    const handleBookMark=()=>{
        const info={
            strPlayer,
            strNationality,
            strPosition,
            strSport,
            idPlayer
        }
        
        const prevBookMark=localStorage.getItem("bookMark");
             const BookmarkOld=JSON.parse(prevBookMark);
             
        if(BookmarkOld){
            const ifExist=BookmarkOld.find(p => p.idPlayer === idPlayer);
            if(ifExist){
                alert("already have")
                return;
            }
            localStorage.setItem("bookMark",JSON.stringify([...BookmarkOld,info]))

        }
        else{
            localStorage.setItem("bookMark",JSON.stringify([info]))
        }
    }


    return (
        <div>
            <div className='player-cart'>
                <img className='img-player' src={strCutout} alt="" srcset="" />
               <h2 className='description'>Name: {strPlayer}</h2>
                <p className='description'>Birth: {dateBorn}</p>
                <p className='description'>Nationality: {strNationality}</p>
                <p className='description'>Playing: {strSport}</p>
                <small className='description'>Position: {strPosition}</small>
                <small className='description'>player Id: {idPlayer}</small>

          <div>
                <button className='btn-group' type="details">Details</button>
                <button className='btn-group' onClick={addCarthandler} type="add">Add Cart</button>
                <button onClick={handleBookMark} className='btn-group' type="bookmark">Bookmark</button>
          </div>

            </div>
        </div>
    );
};

export default Player;