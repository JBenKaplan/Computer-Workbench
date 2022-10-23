import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AllBenches = () => {
  const [benches, setBenches] = useState([])

  const getBenches = async () => {
    try {
      let res = await axios.get('http://localhost:3001/wb/all')
      console.log(res)
      setBenches(res)
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
          <p>{bench.type}</p>
          <img src={bench.image} alt="picture" />
          <p>{bench.name}</p>
          <p>${bench.price}</p>
          <p>{bench.details}</p>
          <button className="addPart">Add</button>
        </div>
      ))}
    </main>
  )
}

export default AllBenches
