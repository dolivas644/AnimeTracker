import React from 'react'
import './Ranks.css';
import GetTopAnime from './GetTopAnime';
import GetTopManga from './GetTopManga';
import GetTopPeople from './GetTopPeople';
import GetTopReviews from './GetTopReviews';
import GetTopCharacters from './GetTopCharacters';

const TopRanks = () => {
    return (
        <div>
            <h1>Choose the topic for your top list</h1>
            <div >
                
                <button className='button-17'>Anime</button>
                <button className='button-17'>Manga</button>
                <button className='button-17'>People</button>
                <button className='button-17'>Characters</button>
                <button className='button-17'>Reviews</button>
            </div>
            <div>
            <GetTopAnime />
            <GetTopManga />
            <GetTopPeople/>
            <GetTopReviews/>
            <GetTopCharacters/>
            </div>

        </div>
    )
}

export default TopRanks
