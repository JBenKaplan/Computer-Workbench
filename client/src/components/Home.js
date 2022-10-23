import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate()

  const NewBenchPage = () => {
    navigate('/wb/create')
  }

  const AllWorkBenches = () => {
    navigate('wb/all')
  }

  return (
    <main>
      <Nav />
      <h1>Computer Workbench</h1>
      <h3>Create a Workbench or Join an exisiting one</h3>
      <div className="wbButtons">
        <button onClick={NewBenchPage}>Create New</button>
        <button onClick={AllWorkBenches}>Join Exisiting</button>
      </div>
    </main>
  )
}

export default Home
