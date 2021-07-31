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
  return (
    <>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像" />
    </>
  )
}
