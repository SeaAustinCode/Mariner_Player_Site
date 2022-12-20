import React, {useState, useEffect} from 'react'
import axios from 'axios';

const PlayerList = (props) => {

    const [players, setPlayers] = useState([]) //server will bring back an array 

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
        <h2>All the Players</h2>
        <hr/>
        {JSON.stringify(players)}
        {
            players.map((player, _id) =>{
                return (
                    <div key={player._id}>
                        <h5>Name {player.firstName} {player.lastName} aka {player.nickname}</h5>
                        <img src={player.imageURL} alt={player.firstName} height="25%" width=""/>
                        <h5>Birthday: {player.birthDate}</h5>
                        <h5>Position: {player.position}</h5>
                        <h5>Twitter: {player.twitterHandle}</h5>
                        <h5>Instagram</h5>
                        <a href={player.baseballReference}>Baseball Reference</a>
                        <h5>Awards</h5>
                        <h5>Official Site</h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PlayerList