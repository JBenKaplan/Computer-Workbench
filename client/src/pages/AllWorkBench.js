import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkBench from '../components/WorkBench'

const AllBenches = () => {
  const [benches, setBenches] = useState([])

  const getBenches = async () => {
    try {
      let res = await axios.get('http://localhost:3001/wb/all')
      setBenches(res.data.benches)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBenches()
  }, [])

  return (
    <main>
      <div>
        <WorkBench benches={benches} />
      </div>
    </main>
  )
}

export default AllBenches
