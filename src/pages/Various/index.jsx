export default function Various() {

  return (
    <>
      <div className="intro">
        A component for messing around with (always under dev)
      </div>
      <Parent />
    </>

  )
}

const Parent = () => {
  const handleClick = () => {
    console.log("parent click");
  };

  return (
    <>
      <Child handleClick={handleClick} temp={69} />
    </>
  )
}

function Child(props) {
  const handleClick = props.handleClick
  return <button onClick={handleClick}>Apply </button>;
}






