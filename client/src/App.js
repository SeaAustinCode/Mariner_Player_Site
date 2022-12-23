import './App.css';
import {Link, Routes, Route, Navigate} from "react-router-dom";
import PlayerList from './components/PlayerList';
import Home from './components/Home';
import SinglePlayer from './components/SinglePlayer';


function App() {
  return (
    <div className="App">
      <h1>Players</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create/player">Create</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/players">View all Players</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <hr />

      <Routes>
        {/* HOME */}
        <Route path='/' element={<Home/>} />
        {/* ALL PLAYERS */}
        <Route path="/players" element={<PlayerList/>} />
        {/* SINGLE PLAYER PAGE */}
        <Route path="/players/:id" element={<SinglePlayer/>} />
        {/* REDIRECT */}
        <Route path="*" element={<Navigate to ="/players/" replace />} />  {/* REDIRECT */}
      </Routes>
    </div>
  );
}

export default App;
