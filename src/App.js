import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Homepage/Home";
import Appfolio from "./components/pages/Appfoliopage/Appfolio";
import Footer from "./components/footer"


function App() {
  return (
    <div>
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/appfolio" component={Appfolio} />        
        
      </div>
    </Router>
      <Footer />
      </div>
  );
}

export default App;
