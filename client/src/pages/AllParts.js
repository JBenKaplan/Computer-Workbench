import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

const AllParts = () => {
  const [parts, setParts] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/')
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
          <img src={part.img} alt="picture" />
          <p>{part.name}</p>
          <p>{part.type}</p>
          <p>${part.price}</p>
          <p>{part.details}</p>
          <button className="addPart">Add</button>
        </div>
      ))}
    </main>
  )
}

export default AllParts
