import React from "react";
import { NavLink } from 'react-router-dom';
import "../App.css";

export default function Header() {
  return (
    <div className="homepage-inner">   


<div className="movies-parent">
    
<nav>
<div style={{ display: "flex"}}>
  <NavLink to="/" className="movies120">Movies</NavLink>
  <NavLink to="/Android" className="movies130">TVSeries</NavLink>
  <NavLink to="/Categories" className="movies150">Categories</NavLink>
  <NavLink to="/SubscriptionForm" className="movies140">Subscription</NavLink>
</div>
</nav>
</div>
</div>
);
}