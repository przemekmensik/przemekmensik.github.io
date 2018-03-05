import React, { Component, PropTypes } from 'react';
import UnitSwitch from './unitButton.jsx';
import Toggle from 'react-bootstrap-toggle';
import ReactTransitions from 'react-transitions';
import Transition from 'react-transition-group/Transition';



const AppDetails = (props) => {

  return (
    console.log('komponent AppDetails'),
    <div className="row mt-2">
      <div className="col-4">
            <img className="fluid" src= { "images/white/svg/" + props.icon + ".svg"}  alt="Weather icon"></img>
        <div>
          <p>{props.location}</p>
          <h3>{props.date}</h3>
        </div>
      </div>
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
