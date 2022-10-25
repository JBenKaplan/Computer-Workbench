const WorkBench = (props) => {
  return (
    <div className="wbCard" onClick={() => props.onClick(props.id)}>
      <div className="image-wrapper">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="benchInfo">
        <h3>{props.name}</h3>
        <h4>{props.budget}</h4>
      </div>
    </div>
  )
}

export default WorkBench
