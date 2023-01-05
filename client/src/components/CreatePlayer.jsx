import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePlayer = (props) => {
  
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [baseballReferencePhoto, setBaseballReferencePhoto] = useState("");
  const [position, setPosition] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [baseballReference, setBaseballReference] = useState("");
  const [playerAwards, setPlayerAwards] = useState("");
  const [infield, setInfield] = useState(false);
  const [outfield, setOutfield] = useState(false);
  const [startingPitcher, setStartingPitcher] =
    useState(false);
  const [reliefPitcher, setReliefPitcher] =
    useState(false);

  const createPlayer = (e) => {
    e.preventDefault();
    const newPlayer = {
      firstName,
      lastName,
      nickName,
      birthDate,
      imageURL,
      baseballReferencePhoto,
      position,
      twitterHandle,
      instagramHandle,
      baseballReference,
      playerAwards,
      infield,
      outfield,
      startingPitcher,
      reliefPitcher,
    };

    axios
      .post("http://localhost:8000/api/players", newPlayer)
      .then(res => {
        console.log(res.data);
        console.log("CLIENT SUCCESS");
        navigate("/");
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      });
    // POST to the DB with the object
  };

  return (
    <div className="container">
      {/* <p>
            {JSON.stringify(firstName)}
        </p> */}
      <form onSubmit={createPlayer}>
        First Name:{" "}
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />{" "}
        <br />
        Last Name:{" "}
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />{" "}
        <br />
        Nickname:{" "}
        <input
          type="text"
          onChange={(e) => setNickName(e.target.value)}
          value={nickName}
        />{" "}
        <br />
        Birthday YYYY-M-DD:{" "}
        <input
          type="date"
          onChange={(e) => setBirthDate(e.target.value)}
          value={birthDate}
        />{" "}
        <br />
        Image URL:{" "}
        <input
          type="text"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageURL}
        />{" "}
        <br />
        Baseball Reference Image URL:{" "}
        <input
          type="text"
          onChange={(e) => setBaseballReferencePhoto(e.target.value)}
          value={baseballReferencePhoto}
        />{" "}
        <br />
        Position:{" "}
        <input
          type="text"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        />{" "}
        <br />
        Twitter:{" "}
        <input
          type="text"
          onChange={(e) => setTwitterHandle(e.target.value)}
          value={twitterHandle}
        />{" "}
        <br />
        Instagram:{" "}
        <input
          type="text"
          onChange={(e) => setInstagramHandle(e.target.value)}
          value={instagramHandle}
        />{" "}
        <br />
        Baseball Reference:{" "}
        <input
          type="text"
          onChange={(e) => setBaseballReference(e.target.value)}
          value={baseballReference}
        />{" "}
        <br />
        Awards:{" "}
        <input
          type="text"
          onChange={(e) => setPlayerAwards(e.target.value)}
          value={playerAwards}
        />{" "}
        <br />
        Infield:{" "}
        <input
          type="checkbox"
          onChange={(e) => setInfield(e.target.checked)}
          checked={infield}
        />{" "}
        <br />
        Outfield:{" "}
        <input
          type="checkbox"
          onChange={(e) => setOutfield(e.target.checked)}
          checked={outfield}
        />{" "}
        <br />
        Starting Pitcher:{" "}
        <input
          type="checkbox"
          onChange={(e) => setStartingPitcher(e.target.checked)}
          checked={startingPitcher}
        />{" "}
        <br />
        Relief Pitcher:{" "}
        <input
          type="checkbox"
          onChange={(e) => setReliefPitcher(e.target.checked)}
          checked={reliefPitcher}
        />{" "}
        <br />
        <button>Create New Player</button> <br />
      </form>
    </div>
  );
};

export default CreatePlayer;
