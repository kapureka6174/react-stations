// DO NOT DELETE
import React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/boxer/n02108089_3258.jpg',
  )

  const fetchApi = async () => {
    const url = await fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => data.message)
    return url
  }
  return (
    <main>
      <p className="site_description">犬の画像を表示するサイトです</p>
      <div className="image_and_button">
        <DogImage url={dogUrl} />
        <button
          className="update_button"
          onClick={async () => setDogUrl(await fetchApi())}
        >
          更新
        </button>
      </div>
    </main>
  )
}
