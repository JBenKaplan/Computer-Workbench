import Nav from './Nav'
import { Link } from 'react-router-dom'

const WorkBench = (props) => {
  return (
    <main>
      <Nav />
      <div className="partsButtons">
        <Link to="/parts/all">
          <div className="CPU">
            <h3>CPU</h3>
          </div>
        </Link>
        <div className="GPU">
          <h3>GPU</h3>
        </div>
        <div className="RAM">
          <h3>RAM</h3>
        </div>
        <div className="MOTHERBOARD">
          <h3>Motherboard</h3>
        </div>
        <div className="CASE">
          <h3>Case</h3>
        </div>
        <div className="ADD_PART">
          <h3>Add Part</h3>
        </div>
      </div>
    </main>
  )
}

export default WorkBench
