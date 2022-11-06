import React from 'react'
import { useState, useEffect } from 'react'
import HundredList from './HundredList';
const TopAnime = () => {

    const [topAnime, setTopAnime]=useState([]);

    const getTopAnime=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/top/anime`)
        const resData =await res.json();
    
        setTopAnime(resData.data);
    }
    useEffect(()=>{
      getTopAnime()
    },[])
  return (
    <div>
      <HundredList topAnime={topAnime}/>
    </div>
  )
}

export default TopAnime


