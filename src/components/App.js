import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home"
import Header from "./Header"
import AddTrackForm from "./AddTrackForm";
import TrackList from "./TrackList";

function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/tracks")
      .then(resp => resp.json())
      .then(tracks => setTracks(tracks))
    }, [])

  return (
    <>
      <NavBar />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tracks" element={<TrackList tracks={tracks}/>} />
          <Route path="/addtrack" element={<AddTrackForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
