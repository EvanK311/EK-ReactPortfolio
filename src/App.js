import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Homepage/Home";
import About from "./components/pages/Appfoliopage/Appfolio";
import Contact from "./components/pages/Contactpage/Contact";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/appfolio" component={About} />        
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
