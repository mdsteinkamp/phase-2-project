import React from "react";
import TrackCard from "./TrackCard";

export default function TrackList({ tracks }) {
    
  const trackCards = tracks.map(track => (
    <TrackCard 
      key={track.id}
      track={track}
    />           
  ))


  return (
    <div>
      <h4>Tracks</h4>
      <ul>{trackCards}</ul>
    </div>
  )
}