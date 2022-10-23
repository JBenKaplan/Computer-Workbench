import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AllParts = () => {
  const [parts, setParts] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/type/ram')
      console.log(res.data.part)
      setParts(res.data.part)
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
      <div className="partList">
        {parts.map((part) => (
          <div key={part._id}>
            <img src={part.image} alt="picture" />
            <p>{part.name}</p>
            <p>${part.price}</p>
            <p>{part.details}</p>
            <button className="addRAM">Add RAM</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllParts
