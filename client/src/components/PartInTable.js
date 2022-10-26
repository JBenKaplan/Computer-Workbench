import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowWorkBench = (props) => {
  const [parts, setParts] = useState([])
  const [benchCreated, setBenchCreated] = useState(false)

  const { id } = useParams()

  const getParts = async (req, res) => {
    try {
      let res = await axios.get(`http://localhost:3001/wb/${id}`)
      let benchCreated = res.data.bench.userCreated
      setParts(res.data.bench.parts)
      setBenchCreated(benchCreated)
    } catch (err) {
      console.log(err)
    }
  }

  const removePart = async (req, res) => {
    try {
      console.log(req)
      let res = await axios.put(`http://localhost:3001/wb/${id}/${req}/remove`)
      console.log('Part removed')
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getParts()
  }, [])

  return (
    <main>
      <table>
        <tbody>
          <tr>
            <td>
              <img
                className="partPicture"
                src={props.part.image}
                alt="picture"
              />
            </td>
            <td className="partName">
              <p>{props.part.name}</p>
            </td>
            <td className="partPrice">
              <p>${props.part.price}</p>
            </td>
            <td>
              <p className="detailsList">{props.part.details}</p>
            </td>
            <td className="partButtons">
              <button
                className="removePart"
                onClick={() => removePart(props.part._id)}
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default ShowWorkBench
