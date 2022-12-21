import './App.css';
import {Link, Routes, Route, Navigate} from "react-router-dom";
import PlayerList from './components/PlayerList';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Players</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create/player">Create</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/players">View all Players</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <hr />

      <Routes>
        {/* ALL PLAYERS */}
        <Route path='/' element={<Home/>} />
        <Route path="/players" element={<PlayerList/>} />
      </Routes>
    </div>
  );
}

export default App;
