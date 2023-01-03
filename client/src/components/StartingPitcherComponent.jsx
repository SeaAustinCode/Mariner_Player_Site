import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StartingPitcherComponent = () => {
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
          <h1 className="navy-color">Starting Pitchers</h1>
          {players
            .filter((player) => player.startingPitcher === true)
            .map((filteredStartingPitcher) => {
              return (
                <div key={filteredStartingPitcher._id}>
                  <Link
                    to={"/players/" + filteredStartingPitcher._id}
                    style={{ textDecoration: "none" }}
                  >
                    <h2 className="silver-color d-flex justify-content-center">
                      {filteredStartingPitcher.firstName} {filteredStartingPitcher.lastName}{" "}
                      {filteredStartingPitcher.position}
                    </h2>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default StartingPitcherComponent;
