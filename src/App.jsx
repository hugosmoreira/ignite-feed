import { useState } from 'react'
import Post from './Post'
import Header from '../components/Header'
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Post author="Joao Maluco" content="Ele eh um maluco muito doido"/>
    </div>
  )
}

export default App
