import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AnimeList from './components/AnimeList/AnimeList';
import Contact from './components/ContactPage/Contact';
import NavBar from './components/Nav/Nav';
import UserInfo from './components/UserInfo/UserInfo';
import TopAnime from './components/TopHundred/TopAnime';
import Schedules from './components/schedule/Schedules';
import TopRanks from './components/Rankings/TopRanks';

function App() {
  return (
  <>
  <br></br>
  <div className="NavBar">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/TopRanks' element={<TopRanks />}></Route>
            <Route path='/TopAnime' element={<TopAnime />}></Route>
            <Route path='/Schedules' element={<Schedules />}></Route>
            <Route path='/UserInfo' element={<UserInfo />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
