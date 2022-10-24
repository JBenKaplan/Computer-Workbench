import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

const AllParts = () => {
  const [parts, setParts] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/all')
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
          <p>{part.type}</p>
          <img src={part.image} alt="picture" />
          <p>{part.name}</p>
          <p>${part.price}</p>
          <p className="detailsList">{part.details}</p>
          <button className="addPart">Add</button>
        </div>
      ))}
    </main>
  )
}

export default AllParts
