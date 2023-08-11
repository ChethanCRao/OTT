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
  <NavLink to="/" className="movies140">Documentaries</NavLink>
  <NavLink to="/Categories" className="movies150">Categories</NavLink>
</div>
</nav>
</div>
</div>
);
}