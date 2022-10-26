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
          CPUs
          <Link to="/parts/type/cpu">
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/452/external-cpu-cyber-security-kiranshastry-lineal-kiranshastry-4.png"
              alt="show-CPUs"
            />
          </Link>
        </div>
        <div className="partLink">
          GPUs
          <Link to="/parts/type/gpu">
            <img
              src="https://img.icons8.com/external-outline-lafs/452/external-ic_gpu-mining-outline-lafs.png"
              alt="show-GPUs"
            />
          </Link>
        </div>
        <div className="partLink">
          RAM
          <Link to="/parts/type/ram">
            <img
              src="https://img.icons8.com/carbon-copy/452/computer-ram.png"
              alt="show-RAM"
            />
          </Link>
        </div>
        <div className="partLink">
          Motherboards
          <Link to="/parts/type/motherboard">
            <img
              src="https://img.icons8.com/dotty/452/motherboard.png"
              alt="show-Motherboards"
            />
          </Link>
        </div>
        <div className="partLink">
          Cases
          <Link to="/parts/type/case">
            <img
              src="https://img.icons8.com/external-rabit-jes-detailed-outline-rabit-jes/452/external-computer-case-computer-hardware-rabit-jes-detailed-outline-rabit-jes.png"
              alt="show-Cases"
            />
          </Link>
        </div>
        <div className="partLink">
          Other parts
          <Link to="/parts/type/other">
            <img
              src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/452/external-other-user-interface-inkubators-basic-outline-inkubators.png"
              alt="show-Other"
            />
          </Link>
        </div>
        <div className="partLink">
          Create a part
          <Link to="/parts/create">
            <img
              src="https://img.icons8.com/puffy/452/experimental-create-new-puffy.png"
              alt="Create-new-part"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default AllParts
