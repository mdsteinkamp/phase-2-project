import React, { useState } from "react";
import { StyledAddTrackForm } from "./styles/AddTrackForm.styled";

export default function AddTrackForm() {
  const [formData, setFormData] = useState({
    track: "",
    artist: "",
    image: "",
    mode: "",
    difficulty: "", 
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

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