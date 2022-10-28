import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PartTable from '../components/PartTable'

const AllParts = () => {
  const [parts, setParts] = useState([])

  const { id } = useParams()
  const getParts = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/parts/type/${id}`)
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
      <div className="allParts">
        {parts.map((part) => (
          <div key={Math.floor(Math.random() * 1000)}>
            <PartTable part={part} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllParts
