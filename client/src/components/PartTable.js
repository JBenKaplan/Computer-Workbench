import { useState, useEffect } from 'react'
import axios from 'axios'

const PartTable = (props) => {
  const initialState = { workbench_id: '' }
  const [parts, setParts] = useState([])
  const [formState, setFormState] = useState(initialState)
  const [workbenches, setWorkBenches] = useState([])

  const getParts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/parts/all')

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
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/wb/${formState.workbench_id}/${parts.part.id}`,
      formState
    )
    console.log('submitted')
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
    <table>
      <tbody>
        <tr>
          <td className="partPicture">
            <img className="partPicture" src={props.part.image} alt="picture" />
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
            <form onSubmit={handleSubmit} className="addPart">
              <label htmlFor="addWorkbench">Choose Workbench:</label>
              <select
                onChange={handleChange}
                id="workbench_id"
                value={formState.workbench_id}
              >
                <option value="" disabled>
                  {''} - Select Workbench -{''}{' '}
                </option>
                {workbenches.map((workbench) => (
                  <option value={workbench._id} key={workbench._id}>
                    {workbench.owner}
                  </option>
                ))}
              </select>
            </form>
            <button type="submit">Add to Workbench</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PartTable
