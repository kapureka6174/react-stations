// DO NOT DELETE
import React from 'react'
import { useState } from 'react'

export const BreedsSelect = props => {
  const [selectedBreed, setSelectedBreed] = useState('')
  return (
    <div className="breeds_section">
      <p>犬種を選んでね！</p>
      <select
        className="breeds_select"
        value={selectedBreed}
        onChange={e => setSelectedBreed(e.target.value)}
      >
        {props.breeds.map(breed => (
          <option className="breeds_option" value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  )
}
