import WorkBench from './WorkBench'
import Nav from './Nav'
import { useState } from 'react'
import axios from 'axios'

const Home = (props) => {
  const initialState = {
    owner: '',
    budget: '',
    dateStarted: '',
    goalDate: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post('http://localhost:3001/', formState)
    console.log(res.data)
    setFormState(initialState)
    props.getIssues()
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
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
          id="ownerName"
          value={formState.owner}
        />
        <label htmlFor="budget">Budget: if no budget, leave blank</label>
        <input
          onChange={handleChange}
          type="text"
          id="budget"
          value={formState.budget}
        />
        <label htmlFor="startDate">Today's date: MM/DD/YYYY</label>
        <input
          onChange={handleChange}
          type="text"
          id="startDate"
          value={formState.dateStarted}
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

export default Home
