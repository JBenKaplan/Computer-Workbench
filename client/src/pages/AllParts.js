import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PartTable from '../components/PartTable'

const AllParts = () => {
  const initialState = { workbench_id: '' }
  const [parts, setParts] = useState([])
  const [formState, setFormState] = useState(initialState)
  const [workbenches, setWorkBenches] = useState([])

  const navigate = useNavigate()

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/all')
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
      <div className="partLinks">
        <Link to="/parts/type/cpu">CPUs</Link>
        <Link to="/parts/type/gpu">GPUs</Link>
        <Link to="/parts/type/ram">RAM</Link>
        <Link to="/parts/type/motherboard">Motherboards</Link>
        <Link to="/parts/type/case">Cases</Link>
        <Link to="/parts/type/other">Other parts</Link>
        <Link to="/parts/create">Create a part</Link>
      </div>
    </main>
  )
}

export default AllParts
