import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5>States in  React</h5>
      <h3><Counter/></h3>
      <LikeButton/>

    </>
  )
}

export default App
