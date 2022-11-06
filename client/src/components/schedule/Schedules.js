import React from 'react'
import { useState, useEffect } from 'react';
import SeasonList from './SeasonList';

const Schedules = () => {

    const [season, setSeason]=useState([]);

    const getSeasonNow=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/seasons/now`)
        const resData =await res.json();
    
        setSeason(resData.data);
    }
    useEffect(()=>{
      getSeasonNow()
    },[])
  return (
    <div>
      <SeasonList season={season}/>
    </div>
  )
}

export default Schedules
