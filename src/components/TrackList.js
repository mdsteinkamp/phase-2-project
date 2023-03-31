import React from "react";
import { StyledTrackList } from "./styles/TrackList.styled";
import TrackCard from "./TrackCard";

export default function TrackList({ tracks, onSelect }) {

  const trackCards = tracks.map(track => (
    <TrackCard 
      key={track.id}
      track={track}
    />           
  ))

  // function handleSelect(e) {
  //   const filteredTracks = tracks.sort((d1, d2) => {
  //     if (e.target.value === "easy") {
  //       return ((d1.difficulty > d2.difficulty) ? 1 : (d1.difficulty < d2.difficulty) ? -1 :0)
  //     } else {
  //       return ((d1.difficulty < d2.difficulty) ? 1 : (d1.difficulty > d2.difficulty) ? -1 :0)
  //     }
  //   })
  //   onSelect(filteredTracks)
  // }


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
      <ul>{trackCards}</ul>
    </StyledTrackList>
  )
}