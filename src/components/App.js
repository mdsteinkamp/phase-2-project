import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { StyledAppContainer } from "./styles/App.Container.styled";
import { ThemeProvider } from "styled-components";
import NavBar from "./NavBar";
import Header from "./Header"
import AddTrackForm from "./AddTrackForm";
import TrackList from "./TrackList";
import TrackPage from "./TrackPage";

const lightTheme = {
  colors: {
    body: "#fff",
    header: "#fff",
    textColor: "#000",
    nav: "#fff",
    backgroundColor: "#7fffd4"
  }
}

const darkTheme = {
  colors: {
    body: "#36454F",
    header: "#36454F",
    textColor: "#fff",
    nav: "#36454F",
    backgroundColor: "#2E3138"
  }
}


export default function App() {
  const [tracks, setTracks] = useState([])
  const [theme, setTheme] = useState("light")
  const [difficulty, setDifficulty] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [formData, setFormData] = useState({
    track: "",
    artist:"",
    image:"",
    mode: "",
    difficulty: ""
  })
  const isDarkTheme = theme === "dark"

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleAddTrack(e) {
    e.preventDefault()
    const newTrack = {
      track: formData.track,
      artist: formData.artist,
      image: formData.image,
      mode: formData.mode,
      difficulty: formData.difficulty, 
      completed: false
    }
    fetch("http://localhost:3000/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrack)
    })
      .then(resp => resp.json())
      .then(newTrack => {
        setTracks([...tracks, newTrack])
        setFormData({
          track: "",
          artist:"",
          image:"",
          mode: "",
          difficulty: ""
        })     
      })
  }
  
  function handleCompletedTrack(completedTrack) {
    const updatedTracks = tracks.map(track => {
      if (track.id === completedTrack.id) {
        return completedTrack
      } else { 
        return track
      }
    })
    setTracks(updatedTracks)
  }

  function handleSelect(e) {
    const filteredTracks = tracks.sort((d1, d2) => {
      if (e.target.value === "easy") {
        setDifficulty("easy")
        return ((d1.difficulty > d2.difficulty) ? 1 : (d1.difficulty < d2.difficulty) ? -1 :0)
      } else {
        setDifficulty("hard")
        return ((d1.difficulty < d2.difficulty) ? 1 : (d1.difficulty > d2.difficulty) ? -1 :0)
      }
    })
    setTracks(filteredTracks)
  }

  const shownTracks = searchInput !== "" ? tracks.filter(track => Object.values(track).join(' ').toUpperCase().includes(searchInput.toUpperCase())) : tracks

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
            <Route path="/tracks" element={<TrackList tracks={shownTracks} onSelect={handleSelect} onSearch={setSearchInput} handleCompletedTrack={handleCompletedTrack} />} />
            <Route 
              path="/addtrack" 
              element={<AddTrackForm formData={formData} handleChange={handleChange} handleSubmit={handleAddTrack} />} 
            />
            <Route path="/tracks/:id" element={<TrackPage tracks={tracks} />} />
          </Routes>
        </StyledAppContainer>
      </>
    </ThemeProvider>
  );
}