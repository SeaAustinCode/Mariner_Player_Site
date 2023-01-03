import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const LosBomberosComponent = () => {
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
            <h1 className="navy-color">Los Bomberos</h1>
            {players
              .filter((player) => player.reliefPitcher === true)
              .map((filteredLosBomberos) => {
                return (
                  <div key={filteredLosBomberos._id}>
                    <Link
                      to={"/players/" + filteredLosBomberos._id}
                      style={{ textDecoration: "none" }}
                    >
                      <h2 className="silver-color d-flex justify-content-center">
                        {filteredLosBomberos.firstName} {filteredLosBomberos.lastName}{" "}
                        {filteredLosBomberos.position}
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

export default LosBomberosComponent