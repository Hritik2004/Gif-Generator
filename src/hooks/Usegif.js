

import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = 'AFfM0e2K001yOMA8zZC2QMT2tmoQDkSy';

function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    const url = tag
      ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
      : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    try {
      const { data } = await axios.get(url);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
    } catch (error) {
      console.error("Error fetching gif:", error);
      setGif(""); // fallback to blank on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, loading, fetchData };
}

export default useGif;
