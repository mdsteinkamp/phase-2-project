import React from "react";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";
import { NavBarContainer } from "./styles/NavBar.styled"

export default function NavBar({ theme, isDarkTheme, setTheme }) {

  function handleSwitch() {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <NavBarContainer>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/tracks">My Tracks</Link></span>
      <span><Link to="/addtrack">Add a Track</Link></span>
      <span>
        {theme === "light" ? "Light Mode 😎" : "Dark Mode 🐱‍👤"}
        <ReactSwitch onChange={handleSwitch} 
        checked={theme === "light"}/>
      </span>
    </NavBarContainer>
  )
}

