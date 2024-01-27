export default function Various() {
  return (
    <>
      <div className="intro">
        A component for messing around with (always under dev)
      </div>
      <Parent />
    </>
  );
}

function test() {
  const user = {
    name: "pete",
  };
  console.log("i is", user.write.test());
}

const Parent = () => {
  const handleClick = () => {
    console.log("parent click");
  };
  let f = 30;
  let g = 1;

  return (
    <>
      {g+f}
      hello
    </>
  );
};

function Child(props) {
  const handleClick = props.handleClick;
  return <button onClick={handleClick}>Apply </button>;
}
