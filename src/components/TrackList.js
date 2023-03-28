import React from "react";
import TrackCard from "./TrackCard";

export default function TrackList({ tracks }) {
    
    const trackCards = tracks.map(track => (
        <TrackCard 
            key={track.id}
            name={track.name}
            artist={track.artist}
            img={track.image}
            mode={track.mode}
            difficulty={track.difficulty}
            completed={track.completed}
        />           
    ))


    return (
        <div>
            <h4>Tracks</h4>
            <ul>{trackCards}</ul>
        </div>
    )
}