import React from "react";
import "./Appfolio.css"
import password from "../../../pics/Capture.PNG"
import forcaster from "../../../pics/resultscreen.PNG"
import discovery from "../../../pics/venu-logo-large.png"
import petwork from "../../../pics/petwork.png"
import scheduler from "../../../pics/scheduler.PNG"
import notes from "../../../pics/notetaker.PNG"

function Appfolio() {
  return (
    
    <div className="bigcontainer">
        <row className="row">
            <column className="col-md-12">
            <h1>Portfolio</h1>
            </column>
        </row>
        <row className="row">
            <column className="col-md-6- col-lg-6 col-xs-6">
                <h5><a href = "https://ajm5099.github.io/Music-Discovery/">VenU - Music Discovery</a></h5>
                <img src={discovery} id="pic1" className="PortPic img-fluid img-thumbnail" alt="venU logo"/></column>
            <column className="column-md-6 col-lg-6 col-xs-6">
                <h5><a href ="https://secret-meadow-51163.herokuapp.com/">The Social Petwork</a></h5>
                <img src={petwork} id="pic2" className="PortPic img-fluid img-thumbnail" alt="screen of social petwork app"/>
            </column>
        </row>
      <row className="row">
            <column className="column-md-6 col-lg-6 col-xs-6">
                <h5><a href = "https://evank311.github.io/EK-Password-Gen/">Password Generator</a></h5>
                <img src={password} id="pic3" className="PortPic img-fluid img-thumbnail" alt="password generator screen"/>
            </column>
            <column className="column-md-6 col-lg-6 col-xs-6">
               <h5><a href = "https://evank311.github.io/EK-forcaster/" >Simple Weather Forcaster</a></h5>
                <img src={forcaster} id="pic4" className="PortPic img-fluid img-thumbnail" alt="screen of weather app"/>
            </column>
        </row>       
        <row className="row">
        <column className="column-md-6 col-lg-6 col-xs-6">
               <h5><a href = "https://evank311.github.io/EK-DayPlanner/" >Work Day Scheduler</a></h5>
                <img src={scheduler} id="pic5" className="PortPic img-fluid img-thumbnail" alt="screen of weather app"/>
            </column>
            <column className="column-md-6 col-lg-6 col-xs-6">
               <h5><a href = "https://evank311.github.io/ek-noteApp/" >Note Taking App</a></h5>
                <img src={notes} id="pic6" className="PortPic img-fluid img-thumbnail" alt="screen of weather app"/>
            </column>
        </row>
    </div>
  );
}

export default Appfolio;
