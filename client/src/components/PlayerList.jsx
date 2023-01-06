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
  // console.log(player.baseballReference)

  return (
    <div className="map-style">
      {players.map((player, _id) => {
        return (
          <div
            key={player._id}
            className="d-flex space-around container align-items-center"
          >
            <div>
              <img
                className="baseballReference-image-styling"
                src={player.baseballReferencePhoto}
                alt={player.firstName}
              />
              <Link
                to={"/players/" + player._id}
                style={{ textDecoration: "none" }}
              >
                <h1 className="silver-color">
                  {player.firstName} {player.lastName}
                </h1>
              </Link>
              <a
                href={player.baseballReference}
                className="silver-color"
                style={{ textDecoration: "none" }}
              >
                Baseball Reference{" "}
              </a>
            </div>
            <div>
              <h5>Birthday: {player.birthDate.substring(5,7)}-{player.birthDate.substring(8,10)}-{player.birthDate.substring(0,4)}</h5> {/* Formatted birthdate to (YYYY-MM-DD) */}
              <h5>Position: {player.position}</h5>
              <h5>Twitter: {player.twitterHandle}</h5>
              <h5>Instagram: {player.instagramHandle}</h5>
              <h5>Awards: {player.awards} </h5>
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
