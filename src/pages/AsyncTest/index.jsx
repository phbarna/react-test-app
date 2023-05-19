import { useState, useEffect } from "react";

export default function AsyncTest() {
  //example
  async function getData() {
    try {
      const response = await fetch("http://192.168.1.91:1337/data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error");
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const headerStyle = {"text-decoration": "underline", "margin-bottom":  "20px", "margin-top":  "5px"};

  // renders the data line by line in an ordered list
  const renderData = () => {
    return (
      <>
        <div style={headerStyle}>Data Returned OK</div>
    
        <ol>
          {data.map((item) => (
            <div key={item.id}>
              {item.name} age:{item.age} gender:{item.gender} from {item.location}
            </div>
          ))}
        </ol>
        <br></br>
        length of data: {data.length}
      </>
    );
  };

  // cannot render data, so render an error
  const renderError = () => {
    return <h1 className="error">Cannot connect to server !</h1>;
  };

  return (
    <>
      <div className="intro">
        Async example. Relies on having a separate server at
        192.168.1.91:1337/data
      </div>
      {data ? <>{renderData()}</> : <>{renderError()}</>}
    </>
  );
}
