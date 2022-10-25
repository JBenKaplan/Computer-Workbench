import { useState, useEffect } from 'react'
import axios from 'axios'

const PartTable = (props) => {
  const initialState = { workbench_id: '' }
  const [formState, setFormState] = useState(initialState)
  const [workbenches, setWorkBenches] = useState([])

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
      `http://localhost:3001/wb/${formState.workbench_id}/${props.part._id}`,
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
              <label htmlFor="addWorkbench"></label>
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
              <button type="submit">Add to Workbench</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PartTable
