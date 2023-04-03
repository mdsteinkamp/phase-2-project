import { useState } from "react"
import { TrackCardContainer } from "./styles/TrackCard.Container.styled"

export default function TrackCard({ track, handleCompleteTrack }) {
  const [isChecked, setIsChecked] = useState(track.completed === false ? false : true)



  function handleChecked(e) {
    setIsChecked(!isChecked)
    fetch(`http://localhost:3000/tracks/${track.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !isChecked
      }),
    })
      .then(resp => resp.json())
      .then(updatedTrack => handleCompleteTrack(updatedTrack))
  }


  return(
    <TrackCardContainer>
      <p>{track.name}</p>
      <p>by {track.artist}</p>
      <img src={track.image} alt={track.name} />
      <p>key: {track.mode}</p>
      <div className="bottom">
        <span>difficulty {"🎸".repeat(track.difficulty)}</span>
        <form >Completed
          <input 
            type="checkbox" 
            id="completed" 
            value="completed"
            checked={isChecked} 
            onChange={handleChecked}
          ></input>
        </form>
      </div>
    </TrackCardContainer>
  )
}