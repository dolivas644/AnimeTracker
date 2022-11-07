import React from 'react'
import { useState } from 'react';

const GetTopManga = () => {
    const [data, setData] = useState({data:[]})
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    //fetch request to retrieve data from api

    const handleClick = async () => {
        setIsLoading(true);
    
        try {
          const response = await fetch(`https://api.jikan.moe/v4/top/manga`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
    
          const result = await response.json();
    
          console.log('result is: ', JSON.stringify(result, null, 4));
    
          setData(result);
        } catch (err) {
          setErr(err.message);
        } finally {
          setIsLoading(false);
        }
      };
    
      console.log(data);
    
      return (
        <div>
          {err && <h2>{err}</h2>}
    
          <button onClick={handleClick}>Get Top Manga</button>
    
          {isLoading && <h2>Loading...</h2>}
    
          {data.data.map(manga => {
            return (
                <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <h2>Ranking : {manga.rank}</h2>
                    <img className='img' src={manga.images.jpg.image_url} alt="icon"></img>
                    </div>
                    <div class="flip-card-back">
                    <a
                    href={manga.url}
                    target="_blank"
                    key={manga.mal_id}
                    rel="noreferrer">
                    {manga.title}
                </a>
                <p>{manga.title_japanese}</p>
                <p>Rating: {manga.rating}</p>
                <p>Season: {manga.season}</p>
                <p>Year: {manga.year}</p>
                <p>Episodes: {manga.episodes}</p>
                <p>Duration: {manga.duration}</p>
                    </div>
                </div>
            </div>
            );
          })}
        </div>
      );
    };
    

export default GetTopManga
