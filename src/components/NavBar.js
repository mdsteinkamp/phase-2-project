import React from "react";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.nav`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
`

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