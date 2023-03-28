import { TrackCardContainer } from "./styles/TrackCard.Container.styled"

export default function TrackCard({name, artist, img, mode, difficulty, completed }) {
  return(
    <TrackCardContainer>
      <p>{name}</p>
      <p>by {artist}</p>
      <img src={img} alt={name} />
      <p>key: {mode}</p>
      <p>difficulty {difficulty}</p>
      <p>completed </p>
    </TrackCardContainer>
  )
}