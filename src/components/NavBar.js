import React from "react";
import ReactSwitch from "react-switch";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./styles/NavBar.styled"

export default function NavBar({ theme, setTheme }) {

  function handleSwitch() {
    setTheme(isDarkTheme => !isDarkTheme)
  }
 
  return (
    <StyledNavBar>
      <span>
        <NavLink 
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey'}
          }}
          >
            Home
        </NavLink>
      </span>
      <span>
        <NavLink 
          to="/tracks"
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey'}
          }}
          >
            My Tracks
        </NavLink>
      </span>
      <span>
        <NavLink 
          to="/addtrack"
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey'}
          }}
          >
            Add a Track
        </NavLink>
      </span>
      <span>
        {theme ? "Dark Mode 🐱‍👤" : "Light Mode 😎"}
        <ReactSwitch onChange={handleSwitch} checked={theme} />
      </span>
    </StyledNavBar>
  )
}