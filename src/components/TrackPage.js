import { useParams } from "react-router-dom"
import { TrackCardContainer } from "./styles/TrackCard.Container.styled"


export default function TrackPage({ tracks }) {
  const { id } = useParams()

  const selectedTrack = tracks.find(track => track.id === parseInt(id))
  console.log(selectedTrack)

  return (
    <TrackCardContainer>
      <p>{selectedTrack.track}</p>
      <p>by {selectedTrack.artist}</p>
      <img src={selectedTrack.image} alt={selectedTrack.name} />
      <p>key: {selectedTrack.mode}</p>
      <div className="bottom">
        <span>difficulty {"🎸".repeat(selectedTrack.difficulty)}</span>
      </div>
      <div>
      <iframe
      width="919"
      height="525"
      src={selectedTrack.embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"
      />
      </div>
    </TrackCardContainer>
  )
}