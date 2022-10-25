const WorkBench = (props) => {
  return (
    <div className="benches">
      {props.benches.map((bench) => (
        <div className="card" onClick={() => bench.onClick(bench.id)}>
          <div className="image-wrapper">
            <img src={bench.image} alt={bench.name} />
          </div>
          <h3>{bench.name}</h3>
          <h4>{bench.budget}</h4>
        </div>
      ))}
    </div>
  )
}

export default WorkBench
