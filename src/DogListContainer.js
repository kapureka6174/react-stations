// DO NOT DELETE
import React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(Object.keys(data.message)))
  }, [])
  return <BreedsSelect breeds={breeds} />
}
