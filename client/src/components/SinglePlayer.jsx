import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";
const dayjs = require("dayjs");

const SinglePlayer = (props) => {
  const { id } = useParams();
  console.log(id);

  const [thisPlayer, setThisPlayer] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players/" + id)
      .then((res) => {
        console.log(res.data);
        setThisPlayer(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]); // id is a dependecy if it ever changes useEffect triggers again

  console.log(typeof thisPlayer.birthDate);

  if (loaded === false) {
    //
    <LoadingComponent />;
  } else {
    return (
        <div className="container">
          <h1>
            {thisPlayer.firstName} {thisPlayer.lastName}
          </h1>
          <h2>Nickname: {thisPlayer.nickname}</h2>
          {/* <h2>
          Birthday: {thisPlayer.birthDate.substring(5, 7)}-
          {thisPlayer.birthDate.substring(8, 10)}-
          {thisPlayer.birthDate.substring(0, 4)}
        </h2> */}
          <h2>Birthday: {dayjs(thisPlayer.birthDate).format("MM/DD/YYYY")}</h2>
          <h2>Position: {thisPlayer.position}</h2>
          <h2>Twitter: {thisPlayer.twitterHandle}</h2>
          <h2>Instagram: {thisPlayer.instagramHandle}</h2>
          <h2>
            <a href={thisPlayer.baseballReference}>Baseball Reference</a>
          </h2>
          <h2>{thisPlayer.awards}</h2>
        </div>
    );
  }
};

export default SinglePlayer;
