import WorkBench from './WorkBench'
import Nav from './Nav'

const Home = (props) => {
  return (
    <main>
      <Nav />
      <h2>Welcome Home</h2>
      <button onClick={<WorkBench />}>New Workbench</button>
    </main>
  )
}

export default Home
