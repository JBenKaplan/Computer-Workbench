import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import axios from 'axios'

const ShowWorkBench = () => {
  const [parts, setParts] = useState([])
  const [cost, setCost] = useState(0)
  const [budget, setBudget] = useState(0)

  const { id } = useParams()

  const getParts = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      setParts(res.data.bench.parts)
      setBudget(res.data.bench.budget)
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

  const removePart = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      setParts(res.data.bench.parts)
      setBudget(res.data.bench.budget)
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
      <Nav />
      <div className="money">
        <p className="budget">Total Budget: ${budget}</p>
        <p className="totalCost">Total Cost: ${cost}</p>
      </div>
      <div className="workBenchList">
        {parts.map((part) => (
          <div key={part._id}>
            <table>
              <tbody>
                <tr>
                  <td className="partPicture">
                    <img src={part.image} alt="picture" />
                  </td>
                  <td className="partName">
                    <p>{part.name}</p>
                  </td>
                  <td className="partPrice">
                    <p>${part.price}</p>
                  </td>
                  <td>
                    <p className="detailsList">{part.details}</p>
                  </td>
                  <td>
                    <button className="editPart">Edit</button>
                  </td>
                  <td>
                    <button className="removePart">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ShowWorkBench
