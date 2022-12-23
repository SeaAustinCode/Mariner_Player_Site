import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SinglePlayer = (props) => {

    const {id} = useParams();
    console.log(id);

    const [thisPlayer, setThisPlayer] = useState({})

    useEffect(() => {
      axios.get("http://localhost:8000/api/players/" + id)
      .then(res =>{
        console.log(res.data);
        setThisPlayer(res.data)
      })
      .catch(err => console.log(err));
    }, [id]) // id is a dependecy if it ever changes useEffect triggers again
    

  return (
    <div>
        <h1>{thisPlayer.firstName} {thisPlayer.lastName}</h1>
        <h2>{thisPlayer.nickname}</h2>
        <h2>{thisPlayer.birthDate}</h2>
        <h2>{thisPlayer.position}</h2>
        <h2>{thisPlayer.twitterHandle}</h2>
        <h2>{thisPlayer.instagramHandle}</h2>
        <h2><a href={thisPlayer.baseballReference}>Baseball Reference</a></h2>
        <h2>{thisPlayer.awards}</h2>
    {/* {JSON.stringify(thisPlayer)} */}
    </div>
  )
}

export default SinglePlayer