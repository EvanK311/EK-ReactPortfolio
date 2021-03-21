import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/appfolio"
          className={location.pathname === "/appfolio" ? "nav-link active" : "nav-link"}
        >
          Appfolio
        </Link>
      </li>      
      <li className="nav-item">
      <span class="navbar-text"><a href = "https://drive.google.com/file/d/15PfWJi5uYzsz5DrAHL9RkZNviR5E1iX5/view?usp=sharing" target="_blank">My Resume</a>
      </span>
      </li>      
    </ul>
  );
}

export default NavTabs;
