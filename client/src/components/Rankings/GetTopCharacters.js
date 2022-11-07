import React from 'react'
import { useState } from 'react';

const GetTopCharacters = () => {
    const [data, setData] = useState({data:[]})
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    //fetch request to retrieve data from api

    const handleClick = async () => {
        setIsLoading(true);
    
        try {
          const response = await fetch(`https://api.jikan.moe/v4/top/characters`, {
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
    
          <button onClick={handleClick}>Get Top Characters</button>
    
          {isLoading && <h2>Loading...</h2>}
    
          {data.data.map(character => {
            return (
                <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <h2>Name : {character.name}</h2>
                    <img className='img' src={character.images.jpg.image_url} alt="icon"></img>
                    </div>
                    <div class="flip-card-back">
                    <a
                    href={character.url}
                    target="_blank"
                    key={character.mal_id}
                    rel="noreferrer">
                    {character.name_kanji}
                </a>
                <p>{character.name_kanji}</p>
                <p>Nickname: {character.nicknames}</p>
                <p>Favorites: {character.fvaorites}</p>
                <p>About: {character.about}</p>
                
                    </div>
                </div>
            </div>
            );
          })}
        </div>
      );
    };

export default GetTopCharacters
