import { useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'

const CreatePart = () => {
  const initialState = {
    name: '',
    type: '',
    price: '',
    details: '',
    brand: '',
    SKU: '',
    inUse: false,
    image: '',
    workbench_id: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    console.log(formState)
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/parts/create', formState)
    console.log(res)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <Nav />
      <h3>Create a New Part</h3>
      <form onSubmit={handleSubmit} className="newPart">
        <label htmlFor="partType">Type of Part:</label>
        <select onChange={handleChange} id="type" value={formState.type}>
          <option value=""> - Select Part Type - </option>
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="MOTHERBOARD">Motherboard</option>
          <option value="RAM">RAM</option>
          <option value="CASE">Case</option>
          <option value="OTHER">Other</option>
        </select>
        <label htmlFor="partName">Part Name:</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />
        <label htmlFor="partPrice">Part Price USD:</label>
        <input
          onChange={handleChange}
          type="number"
          id="price"
          value={formState.price}
        />
        <label htmlFor="partBrand">Brand:</label>
        <input
          onChange={handleChange}
          type="text"
          id="brand"
          value={formState.brand}
        />
        <label htmlFor="SKU">SKU:</label>
        <input
          onChange={handleChange}
          type="text"
          id="SKU"
          value={formState.SKU}
        />
        <label htmlFor="Image">Image URL:</label>
        <input
          onChange={handleChange}
          type="text"
          id="image"
          value={formState.image}
        />
        <label htmlFor="partDetails">Details: (separate by | )</label>
        <textarea
          onChange={handleChange}
          id="details"
          cols="30"
          rows="10"
          value={formState.details}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default CreatePart
