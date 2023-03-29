import React from "react";
import { StyledAddTrackForm } from "./styles/AddTrackForm.styled";

export default function AddTrackForm() {

  



  return (
    <StyledAddTrackForm>
      <h1>Add Track Form</h1>
      <div>
        <form>
          <input 
            type="text"
            name="track"
            name="track"
            placeholder="Track..."
          />
          <input 
            type="text"
            name="artist"
            name="artist"
            placeholder="Artist..."
          />
          <input 
            type="text"
            name="image"
            name="image"
            placeholder="Cover Image..."
          />
          <input 
            type="text"
            name="mode"
            name="mode"
            placeholder="Key/Modes..."
          />
          <input 
            type="text"
            name="difficulty"
            name="difficulty"
            placeholder="Rate the Difficulty..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledAddTrackForm>
  )
}