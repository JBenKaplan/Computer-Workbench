import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import axios from 'axios'
import PartInTable from '../components/PartInTable'

const ShowWorkBench = (props) => {
  const [parts, setParts] = useState([])
  const [cost, setCost] = useState(0)
  const [budget, setBudget] = useState(0)
  const [benchCreated, setBenchCreated] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const getParts = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      let benchCreated = res.data.bench.userCreated
      setParts(res.data.bench.parts)
      setBudget(res.data.bench.budget)
      setBenchCreated(benchCreated)
    } catch (err) {
      console.log(err)
    }
  }

  const getCost = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      let part = res.data.bench.parts
      let price = 0
      for (let i = 0; i < part.length; i++) {
        price += part[i].price
      }
      setCost(price)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteWorkbench = async (req, res) => {
    try {
      if (window.confirm('Are you sure you want to delete this workbench?')) {
        let res = await axios.delete(`http://localhost:3001/wb/${id}`)
        alert('Workbench Deleted')
        navigate('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getParts()
    getCost()
  }, [])

  return (
    <main>
      <div className="money">
        <p className="budget">Total Budget: ${budget}</p>
        <p className="totalCost">Total Cost: ${cost}</p>
      </div>
      <div className="deleteWorkbench">
        {!benchCreated ? null : (
          <button onClick={() => deleteWorkbench()}>Delete Workbench</button>
        )}
      </div>
      <div className="workBenchList">
        {parts.map((part) => (
          <div key={part._id}>
            <PartInTable part={part} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default ShowWorkBench
