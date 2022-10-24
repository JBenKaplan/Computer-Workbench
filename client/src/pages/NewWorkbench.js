import { useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'

const NewWorkBench = () => {
  const initialState = {
    owner: '',
    budget: '',
    startDate: '',
    goalDate: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/wb/create', formState)
    console.log(res.data)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <main>
      <Nav />
      <h2>Create your Workbench</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="owner">Owner:</label>
        <input
          onChange={handleChange}
          type="text"
          id="owner"
          value={formState.owner}
        />
        <label htmlFor="budget">Budget: if no budget, leave blank</label>
        <input
          onChange={handleChange}
          type="number"
          id="budget"
          value={formState.budget}
        />
        <label htmlFor="startDate">Today's date: MM/DD/YYYY</label>
        <input
          onChange={handleChange}
          type="text"
          id="startDate"
          value={formState.startDate}
        />
        <label htmlFor="goalDate">Completion goal: MM/DD/YYYY</label>
        <input
          onChange={handleChange}
          type="text"
          id="goalDate"
          value={formState.goalDate}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default NewWorkBench
