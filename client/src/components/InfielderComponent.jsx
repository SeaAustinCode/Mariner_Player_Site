import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const InfielderComponent = (props) => {
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
        <div className="container">
          <h1 className="navy-color">Infielders</h1>
          {players.filter(player => player.infield === true).map(filteredInfield => {
            return (
              <div key={filteredInfield._id}>
                <Link
                  to={"/players/" + filteredInfield._id}
                  style={{ textDecoration: "none" }}
                >
                  <h2 className="silver-color d-flex justify-content-center">
                    {filteredInfield.firstName} {filteredInfield.lastName} {filteredInfield.position}
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      </>
  )
        }
      

export default InfielderComponent