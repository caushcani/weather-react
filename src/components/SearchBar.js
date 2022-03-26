import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CityTempInfo } from "./CityTempInfo";

export const SearchBar = () => {
  //weather api key
  KEY = config.key;
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
  };

  const showCity = location === "" ? "" : <CityTempInfo city={location}  />;
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter location</label>
        <input type="text" value={location} onChange={(e) => handleChange(e)} />
        <input type="submit" value="Show temperature" />
      </form>
      <h1>{showCity}</h1>
    </div>
  );
};
