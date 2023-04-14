import React, { useState } from "react";
import { StyledTrackList } from "./styles/TrackList.styled";
import TrackCard from "./TrackCard";

export default function TrackList({ tracks, onSelect, onSearch, handleCompletedTrack }) {
  const [search, setSearch] = useState("")

  const trackCards = tracks.map(track => (
    <TrackCard 
      key={track.id}
      track={track}
      handleCompleteTrack={handleCompleteTrack}
    />           
  ))

  function handleSearch(e) {
    // e.preventDefault()
    setSearch(e.target.value)
    // console.log(search)
    onSearch(search)
  }

  function handleCompleteTrack(completedTrack) {
    handleCompletedTrack(completedTrack)
  }



  return (
    <StyledTrackList>
      <h1>Tracks</h1>
      <form id="difficulty-sort">
          <label>Sort Tracks</label>
          <select id="difficulty-sort" onChange={onSelect}>
            <option value="null">Difficulty Sort</option>
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
      </form>
      <form>
      <h4>Search Your Tracks!</h4>
      <input
        type="text"
        id="search"
        placeholder="Search Your Tracks..."
        value={search}
        onChange={(e) => handleSearch(e)}
      />
    </form>
      <ul>{trackCards}</ul>
    </StyledTrackList>
  )
}