import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CityTempInfo } from "./CityTempInfo";
import config from '../config';

export const SearchBar = () => {
  //weather api key
  const KEY = config.key;
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    //get temperature handler
    if (location != "") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}`)
        .then((res) => {
          const data = res.data;
          setWeather(data);
        });
    }
  }, [location]);

  //handle change of input value
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Location is : " + location);
    console.log(weather);
    console.log("Country:" + weather.sys.country)
  };

  //if weather is not empty, then render CityTempInfo which contains more information about weather
  const showMoreInfo = Object.keys(weather).length === 0 ? "" : <CityTempInfo weather={weather}  />;

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter location</label>
        <input type="text"placeholder="Type city here..." value={location} onChange={(e) => handleChange(e)} />
        {/*<button type="submit" value="Show temperature" className="btn">Submit</button>*/}
      </form>
      {showMoreInfo}
    </div>
  );
};
