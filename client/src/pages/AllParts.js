import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

const AllParts = () => {
  const initialState = { workbench_id: '' }
  const [parts, setParts] = useState([])
  const [formState, setFormState] = useState(initialState)
  const [workbenches, setWorkBenches] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/all')
      console.log(res.data.parts)
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

  const handleSubmit = async (event) => {
    console.log(formState)
    event.preventDefault()
    let res = await axios.post(
      `http://localhost:3001/wb/${formState.workbench_id}/${parts.part.id}`,
      formState
    )
    console.log(res)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
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
            <table>
              <tbody>
                <tr>
                  <td className="partPicture">
                    <img
                      className="partPicture"
                      src={part.image}
                      alt="picture"
                    />
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
                    <form onSubmit={handleSubmit} className="addPart">
                      <label htmlFor="partType"></label>
                      <select
                        onChange={handleChange}
                        id="type"
                        value={formState.type}
                      >
                        <option value=""> - Select Workbench - </option>
                        {workbenches.map((workbench) => (
                          <option value={workbench._id} key={workbench._id}>
                            {workbench.owner}
                          </option>
                        ))}
                      </select>
                    </form>
                    <button className="addPart">Add to Workbench</button>
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

export default AllParts
