const WorkBench = (props) => {
  return (
    <main>
      {props.parts.map((part) => (
        <div key={part._id}>
          <h2>{part.name}</h2>
        </div>
      ))}
    </main>
  )
}

export default WorkBench
