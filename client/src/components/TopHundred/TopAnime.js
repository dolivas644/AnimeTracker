import React from 'react'
import { useState, useEffect } from 'react'
import HundredList from './HundredList';
const TopAnime = () => {
//get top 25 anime series based on popularity/ranking
    const [topAnime, setTopAnime]=useState([]);

    const getTopAnime=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/top/anime`)
        const resData =await res.json();
    
        setTopAnime(resData.data);
    }
    useEffect(()=>{
      getTopAnime()
    },[])

//get top manga series based on popularity/ranking
const [topManga, setTopManga]=useState([]);

const getTopManga=async()=>{
    const res =await fetch(`https://api.jikan.moe/v4/top/anime`)
    const resData =await res.json();

    setTopManga(resData.data);
}
useEffect(()=>{
  getTopManga()
},[])

  return (
    <div>
      <HundredList topAnime={topAnime}/>
    </div>
  )
}

export default TopAnime


