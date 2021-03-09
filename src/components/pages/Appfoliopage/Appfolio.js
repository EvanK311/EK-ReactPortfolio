import React from "react";
import "./Appfolio.css"
import password from "../../../pics/Capture.PNG"
import wislogo from "../../../pics/wisyrdColor.png"
import discovery from "../../../pics/venu-logo-large.png"
import petwork from "../../../pics/petwork.png"
import github from "../../../pics/gitlogo.png"

function Appfolio() {
    return (

        <div className="bigcontainer">
            <row className="row">
                <column className="col-md-12">
                   <h1>Projects</h1>
                   <h2 className="desctext">*Select the github logo for access to repositories and readme*</h2>
                </column>
            </row>
            <row className="row">
                <column className="col-md-6 col-lg-6 col-xs-6">
                    <h5 className="center marginbuff">VenU - Music Discovery  <a href="https://github.com/ajm5099/Music-Discovery">
                    <img src={github} className="gitpic" alt="github icon"/>
                    </a></h5>
                    <a href="https://github.com/ajm5099/Music-Discovery">
                        <img src={discovery} id="pic1" className=" PortPic img-fluid img-thumbnail" alt="venU logo" />
                    </a>
                    <p className="center desctext">An experimental app focused on searching for live music or recorded live music to help relieve lockdown boredom</p>
                    </column>
                <column className="column-md-6 col-lg-6 col-xs-6">
                    <h5 className="center marginbuff">Password Generator  <a href="https://evank311.github.io/EK-Password-Gen/">
                    <img src={github} className="gitpic" alt="github icon"/>
                    </a></h5>
                    <a href="https://evank311.github.io/EK-Password-Gen/"> <img src={password} id="pic3" className=" PortPic img-fluid img-thumbnail" alt="password generator screen" /></a>
                    <p className="center desctext">A simple password generator that takes in prompted preferences and returns a random password within chosen parameters.</p>
                  
                </column>
            </row>
            <row className="row">
                <column className="column-md-6 col-lg-6 col-xs-6">
                    <h5 className="center marginbuff">The Social Petwork  <a href="https://github.com/sophia2798/social_petwork">
                    <img src={github} className="gitpic" alt="github icon"/>
                    </a></h5>
                    <a href="https://secret-meadow-51163.herokuapp.com/"><img src={petwork} id="pic2" className="PortPic img-fluid img-thumbnail" alt="screen of social petwork app" /></a>

                    <p className="center desctext">A social network style app meant to connect pet owners in a certain proximity and allow them to organize together i.e. play mates, walks, recommendations. </p>
                    
                </column>
                <column className="column-md-6 col-lg-6 col-xs-6">
                    <h5 className="center marginbuff">Wisyrd <a href="https://github.com/wisyrd/WiSyRD">
                    <img src={github} className="gitpic" alt="github icon"/>
                    </a><a href="https://github.com/wisyrd/WisyrdBackend">
                    <img src={github} className="gitpic" alt="github icon"/>
                    </a></h5>
                    <a href="https://wisyrd.herokuapp.com/"><img src={wislogo} id="pic3" className="PortPic img-fluid img-thumbnail" alt="Wisyrd logo" /></a>

                    <p className="center desctext">Wisyrd is a still improving widget application that operates as a template to ally manage board game features through a customizable drag and drop with current emphasis on dungeons and dragons.</p>
                    
                </column>
            </row>
            <row className="row">
                {/* <column className="column-md-6 col-lg-6 col-xs-6">
               <h5><a href = "https://evank311.github.io/EK-DayPlanner/" >Work Day Scheduler</a></h5>
                <img src={scheduler} id="pic5" className="PortPic img-fluid img-thumbnail" alt="screen of weather app"/>
            </column>
            <column className="column-md-6 col-lg-6 col-xs-6">
               <h5><a href = "https://evank311.github.io/ek-noteApp/" >Note Taking App</a></h5>
                <img src={notes} id="pic6" className="PortPic img-fluid img-thumbnail" alt="screen of weather app"/>
            </column> */}
            </row>
        </div>
    );
}

export default Appfolio;
