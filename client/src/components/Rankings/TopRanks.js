import {useState} from 'react'
import './Ranks.css';
import GetTopAnime, {fetchAnime} from './GetTopAnime';
import GetTopManga from './GetTopManga';
import GetTopPeople from './GetTopPeople';
import GetTopReviews from './GetTopReviews';
import GetTopCharacters from './GetTopCharacters';

const TopRanks = () => {
    const [activeContent, setActiveContet] = useState(null);
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // ...
    
    const handleAnimeClick = async () => {
        // do whatever the "get top anime componet does and save it animeList
        setActiveContent('anime');
        setLoading(true);
        const [animeList, err] = await fetchAnime(); // addAnimeToList(animeId);
        if (animeList) {
            setAnimeList(animeList);
        }
        if (err) {
            setError(err);
        }
        setLoading(false);
    };

    const makeContainerForContent = () => {
        if (activeContent === "anime") {
            return <GetTopAnime animeList={animeList} />
        }
        // other cases
    };

    return (
        <div>
            <h1>Choose the topic for your top list</h1>
            <div >
                
                <button className='button-17' onClick={handleAnimeClick} >Anime</button>
                <button className='button-17'>Manga</button>
                <button className='button-17'>People</button>
                <button className='button-17'>Characters</button>
                <button className='button-17'>Reviews</button>
            </div>
            <div>
                //content goes here
                {err && <h2>{err}</h2>}
                {loading && <h2>Loading...</h2>}
                {makeContainerForContent()}
            </div>

        </div>
    )
}

export default TopRanks
