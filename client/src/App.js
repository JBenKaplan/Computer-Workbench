import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkBench from './components/WorkBench'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CreatePart from './pages/CreatePart'
import AllParts from './pages/AllParts'

const App = () => {
  return (
    <div className="App">
      <header></header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parts" element={<WorkBench />} />
          <Route path="/parts/all" element={<AllParts />} />
          <Route path="/parts/create" element={<CreatePart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
