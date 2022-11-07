import React from 'react'
import { useState } from 'react';

const GetTopPeople = () => {
    const [data, setData] = useState({data:[]})
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    //fetch request to retrieve data from api

    const handleClick = async () => {
        setIsLoading(true);
    
        try {
          const response = await fetch(`https://api.jikan.moe/v4/top/people`, {
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
    
          <button onClick={handleClick}>Get Top People</button>
    
          {isLoading && <h2>Loading...</h2>}
    
          {data.data.map(people => {
            return (
                <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <h2>Name : {people.name}</h2>
                    <img className='img' src={people.images.jpg.image_url} alt="icon"></img>
                    </div>
                    <div class="flip-card-back">
                    <a
                    href={people.url}
                    target="_blank"
                    key={people.mal_id}
                    rel="noreferrer">
                    {people.alternate_names}
                </a>
                <p>{people.name}</p>
                <p>Birthday: {people.birthday}</p>
                <p>Favorites: {people.favorites}</p>
                <p>About: {people.about}</p>
                    </div>
                </div>
            </div>
            );
          })}
        </div>
      );
    };

export default GetTopPeople
