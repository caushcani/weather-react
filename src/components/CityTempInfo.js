import React, { Suspense } from "react";
import summer from '../img/icons8-sun.gif';
import rain from '../img/icons8-heavy-rain.gif';

export const CityTempInfo = (props) => {
  const n = props.weather.main.temp - 273.15;
  return (
    <div className="card">
      <img src={n>10? summer : rain} />
      <div className="details">
        <h2>City: {props.weather.name}</h2>
        <p> Country: {props.weather.sys.country}</p>
      </div>
      <p id="info">Temperature: {n.toFixed(2)} &deg;C</p>
    </div>
  );
};
