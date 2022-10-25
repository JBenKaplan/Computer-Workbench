import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import axios from 'axios'

const ShowWorkBench = () => {
  const [parts, setParts] = useState([])
  const [cost, setCost] = useState(0)
  const [budget, setBudget] = useState(0)

  const { id } = useParams()

  const getParts = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      console.log(res.data.bench.parts)
      setParts(res.data.bench.parts)
      setCost(res.data.bench.parts.price)
      setBudget(res.data.bench.budget)
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
      <p className="budget">Total Budget: ${budget}</p>
      <p className="totalCost">Total Cost: ${cost}</p>
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
