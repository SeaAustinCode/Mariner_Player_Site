import axios from "axios";
import React, {useState, useEffect} from "react";

const WeatherComponent = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=47.6062&lon=-122.3321&appid=8d0de136fb1646dfbd9bc326e33c6a3d"
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
{JSON.stringify(weather)}
//   return (
//   <div>
//     {weather.map((weather, index) => {
//         return (
//             <div key={index}>

//                 </div>
//         )
//     })}
//   </div>
//   )
};

export default WeatherComponent;
