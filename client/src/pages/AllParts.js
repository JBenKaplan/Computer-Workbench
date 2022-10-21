import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
// import WorkBench from '../components/workBench'

const AllParts = () => {
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
    <main>
      <Nav />
      {parts.map((part) => (
        <div key={part._id}>
          <h2>
            {part.name}
            <button className="addPart">Add</button>
          </h2>
        </div>
      ))}
    </main>
  )
}

export default AllParts
