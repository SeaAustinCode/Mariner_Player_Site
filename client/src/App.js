import './App.css';
import {Link, Routes, Route, Navigate} from "react-router-dom";
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <h1>Players</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create/player">Create</Link>
      <hr />

      <Routes>
        {/* MAIN - ALL PLAYERS */}
        <Route path="/players" element={<PlayerList/>} />
      </Routes>
    </div>
  );
}

export default App;
