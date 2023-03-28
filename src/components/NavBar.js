import React from "react";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";
import { NavBarContainer } from "./styles/NavBar.styled"

export default function NavBar() {
  return (
    <NavBarContainer>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/tracks">My Tracks</Link></span>
      <span><Link to="/addtrack">Add a Track</Link></span>
      <span>Light Mode<ReactSwitch /></span>
    </NavBarContainer>
  )
}