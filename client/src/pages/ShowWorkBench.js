import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowWorkBench = () => {
  const [parts, setParts] = useState([])

  const getParts = async (req, res) => {
    console.log(req)
    let id = req.id
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      console.log(res)
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
      <Nav />
      <div className="wbAll">
        {parts.map((part) => (
          <div key={part._id}>
            <img src={part.image} alt="picture" />
            <p>{part.name}</p>
            <p>${part.price}</p>
            <p className="detailsList">{part.details}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ShowWorkBench
