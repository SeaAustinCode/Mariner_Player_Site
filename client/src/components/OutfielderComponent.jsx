import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const OutfielderComponent = () => {
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
            <h1 className="navy-color">Outfielders</h1>
            {players
              .filter((player) => player.outfield === true)
              .map((filteredOutfielder) => {
                return (
                  <div key={filteredOutfielder._id}>
                    <Link
                      to={"/players/" + filteredOutfielder._id}
                      style={{ textDecoration: "none" }}
                    >
                      <h2 className="silver-color d-flex justify-content-center">
                        {filteredOutfielder.firstName} {filteredOutfielder.lastName}{" "}
                        {filteredOutfielder.position}
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

export default OutfielderComponent