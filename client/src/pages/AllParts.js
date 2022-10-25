import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import PartTable from '../components/PartTable'

const AllParts = () => {
  const initialState = { workbench_id: '' }
  const [parts, setParts] = useState([])
  const [formState, setFormState] = useState(initialState)
  const [workbenches, setWorkBenches] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/all')
      setParts(res.data.parts)
    } catch (err) {
      console.log(err)
    }
  }

  const getBenches = async () => {
    try {
      let res = await axios.get('http://localhost:3001/wb/all')
      setWorkBenches(res.data.benches)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getParts()
    getBenches()
  }, [])

  return (
    <main>
      <Nav />
      <div className="allParts">
        {parts.map((part) => (
          <div key={part._id}>
            <PartTable part={part} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllParts
