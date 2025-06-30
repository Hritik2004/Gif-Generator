
import Usegif from "../hooks/Usegif";

// import axios from "axios";
import {useState } from "react";

import Spinner from "./Spinner";

// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

// const API_KEY='0qWG5IsAWUPhC4h0MhkiBMoRxoVc9dB2';


function Tag(){

const [tag,setTag]=useState('');
/*
const [gif,setGif]=useState("");

const [loading,setLoading]=useState('false');

async function fetchData(){
    setLoading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
   const {data}= await axios.get(url);
   const imgSource=data.data.images.downsized_large.url;
   //console.log(imgSource);
   setGif(imgSource);
   setLoading(false);
}

useEffect(()=>{fetchData()},[])

*/

const {gif,loading,fetchData} =Usegif(tag);
function clickHandler(){
fetchData(tag);

}

function changeHandler(event){
  setTag(event.target.value)
}


    return(

        <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]" >Random {tag} GIF</h1>


   { loading ? (<Spinner/>):( <img src={gif} alt="tag" width="450px" />)}



<input className="w-10/12  bg-white opacity-90 text-lg py-2 rounded-lg mb-[3px] text-center " placeholder=" Search GIF Here..." onChange={changeHandler} value={tag} ></input>

    
        <button onClick={clickHandler} className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]">Generate</button>

        </div>
    )
}
export default Tag;