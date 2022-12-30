import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePlayer = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();

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
  const [startingPitcher, setStartingPitcher] = useState(false);
  const [reliefPitcher, setReliefPitcher] = useState(false);

  // get the data from the DB and put it in state to have the form pre-filled
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players/" + id)
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setNickName(res.data.nickName);
        setBirthDate(res.data.birthDate);
        setImageUrl(res.data.imageUrl);
        setBaseballReferencePhoto(res.data.baseballReferencePhoto);
        setPosition(res.data.position);
        setTwitterHandle(res.data.twitterHandle);
        setInstagramHandle(res.data.instagramHandle);
        setBaseballReference(res.data.baseballReference);
        setPlayerAwards(res.data.playerAwards);
        setInfield(res.data.infield);
        setOutfield(res.data.outfield);
        setStartingPitcher(res.data.startingPitcher);
        setReliefPitcher(res.data.reliefPitcher);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePlayer = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      firstName,
      lastName,
      nickName,
      birthDate,
      imageURL,
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
      .put("http://localhost:8000/api/players/" +id, updatedPlayer)
      .then((res) => {
        console.log(res.data);
        console.log("CLIENT SUCCESS");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
    // POST to the DB with the object
  };

  return (
    <div>
      {/* <p>
            {JSON.stringify(firstName)}
        </p> */}
      <form onSubmit={updatePlayer}>
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
        < br/>
        Baseball Reference Photo URL:{" "}
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
        <button>Update Player</button> <br />
      </form>
    </div>
  );
};

export default UpdatePlayer;
