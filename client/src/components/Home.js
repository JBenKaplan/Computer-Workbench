import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
  const [benches, setBenches] = useState([])

  const getBenches = async () => {
    try {
      let res = await axios.get('http://localhost:3001/wb/all')
      console.log(res.data.benches)
      setBenches(res.data.benches)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBenches()
  }, [])

  return (
    <main>
      <Nav />
      <h1>Choose WorkBench</h1>
      <div className="workBenches">
        {benches.map((bench) => (
          <div key={bench._id}>
            <h2>{bench.owner}</h2>
            <h3>Budget: ${bench.budget}</h3>
            <h3>Started: {bench.startDate}</h3>
            <h3>Completion: {bench.goalDate}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home
