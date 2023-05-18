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

const Parent = () => {
  const handleClick = () => {
    console.log("parent click");
  };
  let f = true;
  return (
    <>
      <>
        {f ? (
          <>
            true
            <div>in div</div>
          </>
        ) : (
          <>false</>
        )}
      </>
    </>
  );
};

function Child(props) {
  const handleClick = props.handleClick;
  return <button onClick={handleClick}>Apply </button>;
}
