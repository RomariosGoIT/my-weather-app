import React from "react";

const frontPanel = props => (
  <div>
    <div> {props.date.format("dddd")} </div>{" "}
    <div> {props.date.format("MMM Do")} </div> <div> {props.icon} </div>{" "}
    <div> {`${props.temperature}°`} </div>{" "}
    <div> {`${props.apparentTemperature}°`} </div>{" "}
    <div> {props.currentCityName} </div>{" "}
  </div>
);

export default frontPanel;
