import React from "react";
import { StyledAddTrackForm } from "./styles/AddTrackForm.styled";

export default function AddTrackForm( {formData, handleChange, handleSubmit}) {

  return (
    <StyledAddTrackForm>
      <h1>Add Track Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="track"
            placeholder="Track..."
            value={formData.track}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="artist"
            placeholder="Artist..."
            value={formData.artist}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="image"
            placeholder="Cover Image..."
            value={formData.image}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="mode"
            placeholder="Key/Modes..."
            value={formData.mode}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="techniques"
            placeholder="Techniques..."
            value={formData.techniques}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="embedUrl"
            placeholder="Youtube Embed Link..."
            value={formData.embedUrl}
            onChange={handleChange}
          />
          <input 
            type="number"
            max="5"
            name="difficulty"
            placeholder="Rate the Difficulty..."
            value={formData.difficulty}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledAddTrackForm>
  )
}