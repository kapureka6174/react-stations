// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState } from 'react'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
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
    <>
      <header>Dogアプリ</header>
      <main>
        <p className="site_description">犬の画像を表示するサイトです</p>
        <div className="image_and_button">
          <img className="dog_image" src={dogUrl} alt="犬の画像" />
          <button
            className="update_button"
            onClick={async () => setDogUrl(await fetchApi())}
          >
            更新
          </button>
        </div>
      </main>
      <hr />
    </>
  )
}
