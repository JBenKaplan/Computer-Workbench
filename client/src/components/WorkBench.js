import Nav from './Nav'
import { Link } from 'react-router-dom'

const WorkBench = (props) => {
  return (
    <main>
      <Nav />
      <div className="budgetAmount">
        <h3></h3>
      </div>
      <div className="partsButtons">
        <Link to="/parts/type/CPU">
          <div className="CPU">
            <h3>CPU</h3>
          </div>
        </Link>
        <Link to="/parts/type/GPU">
          <div className="GPU">
            <h3>GPU</h3>
          </div>
        </Link>
        <Link to="/parts/type/RAM">
          <div className="RAM">
            <h3>RAM</h3>
          </div>
        </Link>
        <Link to="/parts/type/MOTHERBOARD">
          <div className="MOTHERBOARD">
            <h3>Motherboard</h3>
          </div>
        </Link>
        <Link to="/parts/type/CASE">
          <div className="CASE">
            <h3>Case</h3>
          </div>
        </Link>
        <Link to="/parts/create">
          <div className="ADD_PART">
            <h3>Add Part</h3>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default WorkBench
