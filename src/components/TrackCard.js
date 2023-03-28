export default function TrackCard({name, artist, img, mode, difficulty, completed }) {
  return(
    <div>
      <p className="card">{name}</p>
      <p>by {artist}</p>
      <img src={img} alt={name} />
      <p>key: {mode}</p>
      <p>difficulty {difficulty}</p>
      <p>completed </p>
    </div>
  )
}