import { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const CreatePart = (props) => {
  const initialState = {
    name: '',
    type: '',
    price: '',
    details: '',
    brand: '',
    SKU: '',
    misc: '',
    image: '',
    workbench: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/parts/create', formState)
    console.log(res.data)
    setFormState(initialState)
    props.getIssues()
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit}>
        <label htmlFor="partType">Type of Part:</label>
        <select onChange={handleChange} id="partType" value={formState.type}>
          <option value="" disabled>
            {' '}
            - Select Part Type -{' '}
          </option>
          <option value="CPU">CPU</option>
          <option value="MOBO">Motherboard</option>
          <option value="GPU">GPU</option>
          <option value="RAM">RAM</option>
          <option value="Case">Case</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="partName">Name of Part:</label>
        <input
          onChange={handleChange}
          type="text"
          id="partName"
          value={formState.name}
        />
        <label htmlFor="partPrice">Part Price:</label>
        <input
          onChange={handleChange}
          type="number"
          id="partPrice"
          value={formState.price}
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={handleChange}
          id="message"
          cols="30"
          rows="10"
          value={formState.message}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default CreatePart
