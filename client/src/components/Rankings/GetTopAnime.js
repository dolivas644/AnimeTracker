import React from 'react'
import { useState } from 'react'

const GetTopAnime = (animeList) => {
    //useStates for data, loading & errors
    //fetch request to retrieve data from api
      return (
        <div>
          {animeList.data.map(anime => {
            return (
                <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <h2>Ranking : {anime.rank}</h2>
                    <img className='img' src={anime.images.jpg.image_url} alt="icon"></img>
                    </div>
                    <div class="flip-card-back">
                    <a
                    href={anime.url}
                    target="_blank"
                    key={anime.mal_id}
                    rel="noreferrer">
                    {anime.title}
                </a>
                <p>{anime.title_japanese}</p>
                <p>Rating: {anime.rating}</p>
                <p>Season: {anime.season}</p>
                <p>Year: {anime.year}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Duration: {anime.duration}</p>
                    </div>
                </div>
            </div>
            );
          })}
        </div>
  );
};
    

const fetchAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime`, {
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
      return [result, null];
    } catch (err) {
      return [null, err];
    } 
  };
};

export default GetTopAnime, {fetchAnime};
