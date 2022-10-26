import Nav from './Nav'
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
  const [benches, setBenches] = useState([])

  let navigate = useNavigate()

  const getBenches = async () => {
    try {
      let res = await axios.get('http://localhost:3001/wb/all')
      console.log(res.data.benches)
      setBenches(res.data.benches)
    } catch (err) {
      console.log(err)
    }
  }

  const goToBench = async (id) => {
    navigate(`/wb/${id}`)
  }

  useEffect(() => {
    getBenches()
  }, [])

  return (
    <main>
      <Nav />
      <h1>Choose WorkBench</h1>
      <div className="workBenches">
        {benches.map((bench) => (
          <div
            key={bench._id}
            id={bench._id}
            className="bench"
            onClick={() => goToBench(bench._id)}
          >
            <img src={bench.image} alt="benchPic" className="benchPic" />
            <h3>{bench.owner}</h3>
            <h3>Budget: ${bench.budget}</h3>
          </div>
        ))}
        <div className="new-workbench">
          <Link to="/wb/create">
            <img
              src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/344/external-desk-bedroom-nawicon-detailed-outline-nawicon.png"
              alt="new-workbench"
            />
          </Link>
          New Bench
        </div>
      </div>
    </main>
  )
}

export default Home
