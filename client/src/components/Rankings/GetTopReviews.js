import React from 'react'
import { useState } from 'react';

const GetTopReviews = () => {
    const [data, setData] = useState({data:[]})
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    //fetch request to retrieve data from api

    const handleClick = async () => {
        setIsLoading(true);
    
        try {
          const response = await fetch(`https://api.jikan.moe/v4/top/reviews`, {
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
    
          <button onClick={handleClick}>Get Top Reviews</button>
    
          {isLoading && <h2>Loading...</h2>}
    
          {data.data.map(review => {
            return (
                <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <h2>Username : {review.data.user.username}</h2>
                    <img className='img' src={review.data.user.images.jpg.image_url} alt="icon"></img>
                    </div>
                    <div class="flip-card-back">
                    <a
                    href={review.data.user.url}
                    target="_blank"
                    key={review.data.mal_id}
                    rel="noreferrer">
                    {review.data.anime.title}
                </a>
                <p>{review.data.anime.url}</p>
                <p>Type: {review.data.birthday}</p>
                <p>Favorites: {review.data.type}</p>
                <p>Votes: {review.data.date}</p>
                <p>Review: {review.data.review}</p>
                    </div>
                </div>
            </div>
            );
          })}
        </div>
      );
    };

export default GetTopReviews
