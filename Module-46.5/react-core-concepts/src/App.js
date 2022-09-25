import './App.css';
import { useEffect, useState } from "react";
function App(){
  
  return (
    <div className="App">
     <Products></Products>
    </div> 
  ); 
}  

function Products(){  
  const[albums,setAlbums]=useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setAlbums(data))
  },[]);

  return(
    <div>
      {
         albums.map(album => <Album id={album.id} title={album.title}></Album>)
      }
      <h1>Total: {albums.length} Album</h1>
    </div>
  );
}

function Album(props) {
  return(
    <div className='album-design'>
      <h2>id: {props.id}</h2>
      <h2>Title: {props.title}</h2>
    </div>
  );
}


export default App;
