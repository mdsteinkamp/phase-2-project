import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { TrackCardContainer } from "./styles/TrackCard.Container.styled"

export default function TrackCard({ track, handleCompleteTrack, onDelete }) {
  const [isChecked, setIsChecked] = useState(track.completed === false ? false : true)



  function handleChecked() {
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

  function handleDelete() {
    onDelete(track)
  }

  return(
    <TrackCardContainer>
      <p>{track.track}</p>
      <p>by {track.artist}</p>
      <Link to={`${track.id}`} >
        <img src={track.image} alt={track.name} />
      </Link>
      <p>key: {track.mode}</p>
      <p>Techniques: {track.techniques}</p>
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
        <button onClick={handleDelete}>Delete Track</button>
      </div>

    </TrackCardContainer>
  )
}
