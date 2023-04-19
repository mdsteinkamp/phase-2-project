import { StyledTrackList } from "./styles/TrackList.styled";
import TrackCard from "./TrackCard";


export default function CompletedTrackList({ tracks, handleCompletedTrack, onDelete }) {

  const trackCards = tracks.map(track => (
    <TrackCard 
      key={track.id}
      track={track}
      handleCompleteTrack={handleCompleteTrack}
      onDelete={handleDelete}
    />         
  ))

  function handleCompleteTrack(completedTrack) {
    handleCompletedTrack(completedTrack)
  }
  function handleDelete(deletedTrack) {
    onDelete(deletedTrack)
  }

  return (
  <StyledTrackList>
    {trackCards}
  </StyledTrackList>
  )


}