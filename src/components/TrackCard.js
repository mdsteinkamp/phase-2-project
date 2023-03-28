import { TrackCardContainer } from "./styles/TrackCard.Container.styled"

export default function TrackCard({name, artist, img, mode, difficulty, completed }) {
  return(
    <TrackCardContainer>
      <p>{name}</p>
      <p>by {artist}</p>
      <img src={img} alt={name} />
      <p>key: {mode}</p>
      <div className="bottom">
        <span>difficulty {difficulty}</span>
        <form>Completed
          <input type="checkbox" id="completed"></input>
        </form>
      </div>
    </TrackCardContainer>
  )
}