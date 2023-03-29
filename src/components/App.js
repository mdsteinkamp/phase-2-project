import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { StyledAppContainer } from "./styles/App.Container.styled";
import { ThemeProvider } from "styled-components";
import NavBar from "./NavBar";
import Header from "./Header"
import AddTrackForm from "./AddTrackForm";
import TrackList from "./TrackList";

const lightTheme = {
  colors: {
    header: "#fff",
    textColor: "#000"
  }
}

const darkTheme = {
  colors: {
    header: "#A020F0",
    textColor: "#fff",
  }
}


function App() {
  const [tracks, setTracks] = useState([])
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"


  useEffect(() => {
    fetch("http://localhost:3000/tracks")
      .then(resp => resp.json())
      .then(tracks => setTracks(tracks))
    }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <NavBar theme={theme} isDarkTheme={isDarkTheme} setTheme={setTheme}/>
        <StyledAppContainer>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/tracks" element={<TrackList tracks={tracks}/>} />
            <Route path="/addtrack" element={<AddTrackForm />} />
          </Routes>
        </StyledAppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
