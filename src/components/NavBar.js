import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/tracks">My Tracks</Link></span>
      <span><Link to="/addtrack">Add a Track</Link></span>
    </nav>
  )
}