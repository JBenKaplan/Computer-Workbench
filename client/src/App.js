import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkBench from './components/WorkBench'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [parts, setParts] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts')
      console.log(res.data.parts)
      setParts(res.data.parts)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getParts()
  }, [])

  return (
    <div>
      <header>
        <h1>Nav Bar</h1>
      </header>
      <WorkBench parts={parts} />
    </div>
  )
}

export default App
