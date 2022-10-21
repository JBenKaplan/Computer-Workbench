import Nav from './Nav'

const WorkBench = (props) => {
  return (
    <main>
      <Nav />
      <div className="partsButtons">
        <button>CPU</button>
        <button>GPU</button>
        <button>RAM</button>
        <button>MOTHERBOARD</button>
        <button>CASE</button>
        <button>ADD PART</button>
      </div>
      {/* {props.parts.map((part) => (
        <div key={part._id}>
          <h2>
            {part.name}
            <button className="removePart">Remove</button>
          </h2>
        </div>
      ))} */}
    </main>
  )
}

export default WorkBench
