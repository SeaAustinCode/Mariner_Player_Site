import './App.css';
import {Link, Routes, Route, Navigate} from "react-router-dom";
import PlayerList from './components/PlayerList';
import Home from './components/Home';
import SinglePlayer from './components/SinglePlayer';
import CreatePlayer from './components/CreatePlayer';
import UpdatePlayer from './components/UpdatePlayer';


function App() {
  return (
    <div className="App">
      <h1>Players</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create">Create</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/players">View all Players</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <hr />

      <Routes>
        {/* HOME */}
        <Route path='/' element={<Home/>} />

        {/* ALL PLAYERS */}
        <Route path="/players" element={<PlayerList/>} />

        {/* SINGLE PLAYER PAGE */}
        <Route path="/players/:id" element={<SinglePlayer/>} />

        {/* CREATE PLAYER PAGE */}
        <Route path="/create" element={<CreatePlayer/>} />

        {/* UPDATE PLAYER PAGE */}
        <Route path="/update/:id" element={<UpdatePlayer/>} />

        {/* REDIRECT -- must be at the end of the routes*/}
        <Route path="*" element={<Navigate to ="/players/" replace />} />  {/* replace needed to replace history of the browser */}
      </Routes>
    </div>
  );
}

export default App;
