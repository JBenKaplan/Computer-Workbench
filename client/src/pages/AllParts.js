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
        <div className="partLink">
          <Link to="/parts/type/cpu">
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/452/external-cpu-cyber-security-kiranshastry-lineal-kiranshastry-4.png"
              alt="show-CPUs"
            />
            CPUs
          </Link>
        </div>
        <div className="partLink">
          <Link to="/parts/type/gpu">
            <img src="" alt="show-GPUs" />
            GPUs
          </Link>
        </div>
        <div className="partLink">
          <Link to="/parts/type/ram">
            <img src="" alt="show-GPUs" />
            RAM
          </Link>
        </div>
        <div className="partLink">
          <Link to="/parts/type/motherboard">
            <img src="" alt="show-GPUs" />
            Motherboards
          </Link>
        </div>
        <div className="partLink">
          <Link to="/parts/type/case">
            <img src="" alt="show-GPUs" />
            Cases
          </Link>
        </div>
        <div className="partLink">
          <Link to="/parts/type/other">
            <img src="" alt="show-GPUs" />
            Other parts
          </Link>
        </div>
        <div className="partLink">
          <Link to="/parts/create">
            <img src="" alt="show-GPUs" />
            Create a part
          </Link>
        </div>
      </div>
    </main>
  )
}

export default AllParts
