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
      <ul>{trackCards}</ul>
    </StyledTrackList>
  )
}