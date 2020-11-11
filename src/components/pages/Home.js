import React from "react";


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header">
            <h1>About Me</h1>
          </div>
        </div>
      </div>
      <hr></hr>

      <row className="row">
        <section className="clearfix">
          <column className="col-lg-3 col-md-3 col-xs-3">
          <img alt="timer" src={require('../../pics/MeandPup.jpg')} />
          </column>
          <column className="col-lg-9 col-md-9 col-xs-9">
            <p>My name is Evan Kirkland. I am an aspiring programmer with hopefully a bright future ahead of me! Most of my work experience is wrapped in the restaurant management area, having invested nearly a decade learning to appreciate coffee and food made from scratch. I decided to change career paths when the world threw us all the sudden curveball we know as covid-19. I have always been interested in learning to work with computers, as working with mine is a hobby I realy enjoy. For the first time in a while, I finally feel like I'm heading towards a dream career that I can be proud of!
          </p>
          </column>

        </section>
      </row>
    </div>
  );
}

export default Home;
