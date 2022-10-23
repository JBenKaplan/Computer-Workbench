import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'

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
      <h3>Create a New Part</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="partType">Type of Part:</label>
        <select onChange={handleChange} id="partType" value={formState.type}>
          <option value="" disabled>
            {' '}
            - Select Part Type -{' '}
          </option>
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="MOTHERBOARD">Motherboard</option>
          <option value="RAM">RAM</option>
          <option value="CASE">Case</option>
          <option value="OTHER">Other</option>
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
        <label htmlFor="partBrand">Brand:</label>
        <input
          onChange={handleChange}
          type="text"
          id="partBrand"
          value={formState.brand}
        />
        <label htmlFor="SKU">SKU:</label>
        <input
          onChange={handleChange}
          type="text"
          id="SKU"
          value={formState.SKU}
        />
        <label htmlFor="partDetails">Details:</label>
        <textarea
          onChange={handleChange}
          id="partDetails"
          cols="30"
          rows="10"
          value={formState.details}
        ></textarea>
        <button type="submit">Send</button>
        <button onClick={() => <Link to="/parts" />}>Back</button>
      </form>
    </div>
  )
}

export default CreatePart
