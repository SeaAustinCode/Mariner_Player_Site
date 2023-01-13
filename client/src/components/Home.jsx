import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="container width-100">
          <h1 className="navy-color">Current Player Pages</h1>
          {players.map((player, _id) => {
            return (
              <div key={player._id}>
                <Link
                  to={"/players/" + player._id}
                  style={{ textDecoration: "none" }}
                >
                  <h2 className="silver-color">
                    {player.firstName} {player.lastName}
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex gap">
        <div className="container">
          <h1 className="navy-color">T-Mobile Park</h1>
          {/* <h2 className="silver-color">Virtual Venue<a href=""/></h2> */}
          <h2><a href="http://mariners.io-media.com/web/index.html#" className="silver-color" style={{textDecoration: "none"}}>Virtual Venue</a></h2>
          <h2><a href="https://www.mlb.com/mariners/fans/all-star-game" className="silver-color" style={{textDecoration: "none"}}>2023 All-Star Game</a></h2>
          <h2><a href="https://www.mlb.com/mariners/tickets/events/t-mobile-park-events" className="silver-color" style={{textDecoration: "none"}}>Upcoming Events</a></h2>
        </div>
        <div className="container">
          <h1 className="navy-color" >Filter by position</h1>
          <Link to ={"/infielders"} style={{textDecoration: "none"}}><h2 className="silver-color" >Infielders</h2> </Link>
          <Link to={"/outfielders"} style={{textDecoration: "none"}}><h2 className="silver-color" >Outfielders</h2></Link>
          <Link to={"/starting-pitchers"} style={{textDecoration: "none"}}><h2 className="silver-color">Starting Pitchers</h2></Link>
          <Link to={"/los-bomberos"} style={{textDecoration: "none"}}><h2 className="red-color">Los Bomberos</h2></Link>
        </div>
        <div className="container">
          <h1>T-Mobile</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
