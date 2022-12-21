import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Home = (props) => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then(res =>{
            console.log(res.data);
            setPlayers(res.data)
        })
        .catch(err => console.log(err));
    }, [])

  return (
    <div>
        {
        players.map((player, _id) =>{
            return (
                <div key={player._id}>
                    <h1>{player.firstName} {player.lastName}</h1>
                    </div>
            )
        })
    }
    </div>
  )
    }

export default Home