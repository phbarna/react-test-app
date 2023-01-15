export default function Various() {

  return (
    <Parent />
  )
}

const Parent = () => {
  const handleClick = () => {
    console.log("parent click");
  };

  return (
    <>
     
      <Child handleClick={handleClick} temp={69}/>
    </>
  )
}

function Child(props) {
  const handleClick= props.handleClick
  return <button onClick={handleClick}>Apply </button>;
}






