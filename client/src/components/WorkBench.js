const WorkBench = (props) => {
  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
      <div className="image-wrapper">
        <img src={props.image} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <h4>{props.budget}</h4>
    </div>
  )
}

export default WorkBench
