import { TrackCardContainer } from "./styles/TrackCard.Container.styled"

export default function TrackCard({ track }) {
  return(
    <TrackCardContainer>
      <p>{track.name}</p>
      <p>by {track.artist}</p>
      <img src={track.image} alt={track.name} />
      <p>key: {track.mode}</p>
      <div className="bottom">
        <span>difficulty {track.difficulty}</span>
        <form>Completed
          <input type="checkbox" id="completed"></input>
        </form>
      </div>
    </TrackCardContainer>
  )
}