import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkBench from './components/WorkBench'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CreatePart from './components/CreatePart'

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
    <div className="App">
      <header></header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parts" element={<WorkBench parts={parts} />} />
          <Route path="/parts/create" element={<CreatePart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
