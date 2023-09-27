import React from "react";
import { NavLink } from "react-router-dom";

function Scific({ item }) {
  return (
    <NavLink to="/Android"state={{ movieItem: item }}
    style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}>
  <img src={item.imageurl} alt="image1" />
</NavLink>
  );
}

export default Scific;
