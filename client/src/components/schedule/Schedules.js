import React from 'react'
import { useState, useEffect } from 'react';
import SeasonList from './SeasonList';
import './cards.css'

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
      <div className='left'>
      <SeasonList season={season}/>
      </div>
      <div className='center'>

      </div>
      <div className='right'>
        
      </div>
</div>
      
  )
}

export default Schedules
