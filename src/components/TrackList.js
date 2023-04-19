import React, { useState } from "react";
import { StyledTrackList } from "./styles/TrackList.styled";
import TrackCard from "./TrackCard";
import { StyledH4 } from "./styles/StyledH4.styled";

export default function TrackList({ tracks, onSelect, onSearch, handleCompletedTrack, onDelete }) {
  const [search, setSearch] = useState("")

  const trackCards = tracks.map(track => (
    <TrackCard 
      key={track.id}
      track={track}
      handleCompleteTrack={handleCompleteTrack}
      onDelete={handleDelete}
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
  function handleDelete(deletedTrack) {
    onDelete(deletedTrack)
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
      <StyledH4>Search Your Tracks!</StyledH4>
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