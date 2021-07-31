// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img
        src="https://images.dog.ceo/breeds/boxer/n02108089_3258.jpg"
        alt="犬の画像"
      />
    </>
  )
}
