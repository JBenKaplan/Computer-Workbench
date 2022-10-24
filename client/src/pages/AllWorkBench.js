import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllBenches = () => {
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
      {benches.map((bench) => (
        <div key={bench._id}>
          <h1>Owner: {bench.owner}</h1>
          <h3>{<Link to={bench._id}>Click To View</Link>}</h3>
          <h3>Budget: ${bench.budget}</h3>
          <h3>Started: {bench.startDate}</h3>
          <h3>Completion: {bench.goalDate}</h3>
          <h3>Parts: {bench.parts}</h3>
        </div>
      ))}
    </main>
  )
}

export default AllBenches
