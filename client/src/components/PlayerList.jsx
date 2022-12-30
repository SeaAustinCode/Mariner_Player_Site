import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayerList = (props) => {
  const [players, setPlayers] = useState([]); //server will bring back an array

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // DELETE
  const deletePlayer = (deleteId) => {
    // console.log(deleteId);
    axios
      .delete("http://localhost:8000/api/players/" + deleteId)
      .then((res) => {
        console.log(res.data);
        console.log("DELETED");

        // remove the player from the DOM
        setPlayers(players.filter((player) => player._id !== deleteId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>All the Players</h2>
      <hr />
      {/* {JSON.stringify(players)} */}
      {players.map((player, _id) => {
        return (
            <div key={player._id} className="d-flex space-around">
              <div>
                <img className="responsive"
                  src={player.baseballReferencePhoto}
                  alt={player.firstName}
                />
              </div>
              <div>
                <Link to={"/players/" + player._id}>
                  <h1>
                    {player.firstName} {player.lastName} aka {player.nickname}
                  </h1>
                </Link>
                <h5>Birthday: {player.birthDate}</h5>
                <h5>Position: {player.position}</h5>
                <h5>Twitter: {player.twitterHandle}</h5>
                <h5>Instagram: {player.instagramHandle}</h5>
                <a href={player.baseballReference}>Baseball Reference</a>
                <h5>Awards</h5>
                <h5>Official Site</h5>
                <button>
                  <Link to={"/update/" + player._id}>Edit Player</Link>
                </button>
                <button onClick={() => deletePlayer(player._id)}>Delete</button>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default PlayerList;
