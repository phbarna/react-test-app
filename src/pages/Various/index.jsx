export default function Various() {

  function Car(props) {
    return <p>I am a {props.brand}</p>;
  }

  function Garage() {
    const cars = [
      { id: 1, brand: 'Ford' },
      { id: 2, brand: 'BMW' },
      { id: 3, brand: 'Audi' }
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>

        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}

      </>
    );
  }

  return (
    <>
      <h1>Various</h1>
      <p>various React/css bits and bobs - page is changeable</p>
      <hr></hr>
      <>
        <p>test</p>
        <Garage />
      </>
    </>
  );
}