import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AllParts = () => {
  const [parts, setParts] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/type/cpu')
      console.log(res.data.part)
      setParts(res.data.part)
    } catch (err) {
      console.log(err)
    }
  }

  const addToBench = async (req, res) => {
    try {
      let res = await axios.post(
        `http://localhost:3001/wb/6356b1f3e18d46f8e2f1ed61`
      )
      console.log(res.data.part)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteCPU = async (req, res) => {
    try {
      let id = req.params
      let res = await axios.delete(`http://localhost:3001/parts/${id}`)
      console.log(res.data.part)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getParts()
    addToBench()
    deleteCPU()
  }, [])

  return (
    <main>
      <Nav />
      <div className="partList">
        {parts.map((part) => (
          <div key={part._id}>
            <img src={part.image} alt="picture" />
            <p>{part.name}</p>
            <p>${part.price}</p>
            <p className="detailsList">{part.details}</p>
            <button className="addCPU" onClick={addToBench}>
              Add CPU
            </button>
            <button className="removeCPU" onClick={deleteCPU}>
              Delete CPU
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllParts
