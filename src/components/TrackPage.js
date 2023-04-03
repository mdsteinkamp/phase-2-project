import { useParams } from "react-router-dom"
import { TrackCardContainer } from "./styles/TrackCard.Container.styled"


export default function TrackPage({ tracks }) {
  const { id } = useParams()

  const selectedTrack = tracks.find(track => track.id == id)
  console.log(selectedTrack)

  return (
    <TrackCardContainer>
      <p>{selectedTrack.name}</p>
      <p>by {selectedTrack.artist}</p>
      <img src={selectedTrack.image} alt={selectedTrack.name} />
      <p>key: {selectedTrack.mode}</p>
      <div className="bottom">
        <span>difficulty {"🎸".repeat(selectedTrack.difficulty)}</span>
      </div>
    </TrackCardContainer>
  )
}