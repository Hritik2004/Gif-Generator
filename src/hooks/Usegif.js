
import axios from "axios";
import { useEffect, useState } from "react";

const  API_KEY='AFfM0e2K001yOMA8zZC2QMT2tmoQDkSy';



function Usegif(tag){

    const randomMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const [gif,setGif]=useState("");

const [loading,setLoading]=useState('false');

async function fetchData(tag){
    setLoading(true);
  
   const {data}= await axios.get(tag?(tagMemeurl):randomMemeurl);
   const imgSource=data.data.images.downsized_large.url;
   
   setGif(imgSource);
   setLoading(false);
}

useEffect(()=>{fetchData()},[])


   return {gif,loading,fetchData} 
}
export default Usegif;