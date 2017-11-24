import React, { Component } from 'react';
import UnitSwitch from './unitButton.jsx';
import Toggle from 'react-bootstrap-toggle';

const AppDetails = (props) => {
  return (
    <div className="row mt-2">
      <div className="col-4">
        <img className="fluid" src= { "images/white/svg/" + props.icon + ".svg"}  alt="Weather icon"></img>
        <div>
          <p>{props.location}</p>
          <h3>{props.date}</h3>
        </div>
      </div>
      {/*
      <div className="col-4 col-md-4">
    {/*
      {
        props.unitValue === 'C' ?
        <h1 className="big-font">{props.tempC}<span className="units">&deg; C</span></h1>
        :
        <h1 className="big-font">{props.tempF}<span className="units">&deg; F</span></h1>
      }




      </div>

*/}
      {/* zmiana jednostki temperatury*/}
      {/*
      <div className="d-inline-block btn-group btn-group-sm" data-toggle="buttons">
        <label id="F" onClick={props.onToggle} className="myButton">
          <input type="radio" name="options" ></input>
          &deg; F
        </label>
        <label id="C" onClick={props.onToggle} className="myButton active">
          <input type="radio" name="options" defaultChecked={props.toggleActive}></input>
          &deg; C
        </label>
      </div>
      */}



      <div className="col-4 col-md-5">
        <div className="small-font">
          <p>Wilgotność: <b>{props.humidity}</b> Wiatr: <b>{props.windMPH} km/h</b></p>
          {/*<p>Wiatr: <b>{props.windMPH} km/h</b></p>*/}
          <p><strong>Opady:</strong> <b>{props.precipitation} mm</b> Pogoda: <b>{props.weather}</b></p>
          {/*<p>Pogoda: <b>{props.weather}</b></p>*/}
        </div>
      </div>
    </div>
  );
}

export default AppDetails;
