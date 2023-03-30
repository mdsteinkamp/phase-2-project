import React from "react";
import { StyledTrackList } from "./styles/TrackList.styled";
import TrackCard from "./TrackCard";

export default function TrackList({ tracks }) {
    
  const trackCards = tracks.map(track => (
    <TrackCard 
      key={track.id}
      track={track}
    />           
  ))


  return (
    <StyledTrackList>
      <h1>Tracks</h1>
      <form id="difficulty-sort">
          <label>Sort Tracks</label>
          <select id="difficulty-sort">
            <option value="increasing">Easy</option>
            <option value="decreasing">Hard</option>
          </select>
      </form>
      <ul>{trackCards}</ul>
    </StyledTrackList>
  )
}