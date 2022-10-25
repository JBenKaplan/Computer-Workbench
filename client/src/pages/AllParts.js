import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

const AllParts = () => {
  const [parts, setParts] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/all')
      console.log(res.data.parts)
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
                <td className="partButtons">
                  <button className="addPart">Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </main>
  )
}

export default AllParts
