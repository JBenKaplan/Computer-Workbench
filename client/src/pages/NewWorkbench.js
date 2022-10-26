import { useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'

const NewWorkBench = () => {
  const initialState = {
    owner: '',
    budget: '',
    image: '',
    userCreated: true
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
      <h2>Create your Workbench</h2>
      <form onSubmit={handleSubmit} className="newBench">
        <label htmlFor="owner">Name:</label>
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
        <label htmlFor="image">Image URL</label>
        <input
          onChange={handleChange}
          type="text"
          id="image"
          value={formState.image}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default NewWorkBench
