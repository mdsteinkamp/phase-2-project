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
    body: "#fff",
    header: "#fff",
    textColor: "#000",
    nav: "#fff",
  }
}

const darkTheme = {
  colors: {
    body: "#36454F",
    header: "#36454F",
    textColor: "#fff",
    nav: "#36454F"
  }
}


function App() {
  const [tracks, setTracks] = useState([])
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"
  const [formData, setFormData] = useState({
    track: "",
    artist: "",
    image: "",
    mode: "",
    difficulty: "", 
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }
  
  
  useEffect(() => {
    fetch("http://localhost:3000/tracks")
    .then(resp => resp.json())
    .then(tracks => setTracks(tracks))
  }, [])
  
  document.body.style = isDarkTheme ? `background: ${darkTheme.colors.body};` : `background: ${lightTheme.colors.body};`

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <NavBar theme={theme} isDarkTheme={isDarkTheme} setTheme={setTheme}/>
        <StyledAppContainer>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/tracks" element={<TrackList tracks={tracks}/>} />
            <Route path="/addtrack" element={<AddTrackForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>} />
          </Routes>
        </StyledAppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
