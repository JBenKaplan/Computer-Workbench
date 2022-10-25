import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import axios from 'axios'

const ShowWorkBench = () => {
  const [parts, setParts] = useState([])

  const { id } = useParams()
  const getParts = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      console.log(res.data.bench.parts)
      setParts(res.data.bench.parts)
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
      <div className="wbAll">
        {parts.map((part) => (
          <div key={part._id}>
            <img src={part.image} alt="picture" />
            <p>{part.name}</p>
            <p>${part.price}</p>
            <p className="detailsList">{part.details}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ShowWorkBench
