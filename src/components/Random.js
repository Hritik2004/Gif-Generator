

import Spinner from "./Spinner";
import Usegif from "../hooks/Usegif";


// const  API_KEY='AFfM0e2K001yOMA8zZC2QMT2tmoQDkSy';


function Random(){

/*

const [gif,setGif]=useState("");
const [loading,setLoading]=useState('false');


async function fetchData(){
    setLoading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   const {data}= await axios.get(url);
   const imgSource=data.data.images.downsized_large.url;
   //console.log(imgSource);
   setGif(imgSource);
   setLoading(false);
}

useEffect(()=>{fetchData()},[])
*/

const {gif,loading,fetchData} =Usegif();

function clickHandler(){
fetchData();

}

    return(

        <div className="w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]" >A Random GIF</h1>


   { loading ? (<Spinner/>):( <img src={gif}  alt="random" width="450px" />)}





    
        <button onClick={clickHandler} className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]">Generate</button>

        </div>
    )
}
export default Random;