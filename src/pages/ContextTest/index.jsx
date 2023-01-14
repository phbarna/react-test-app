import { useState, createContext } from "react";
import Child from './Child';

export const UserContext = createContext();

export default function ContextTest() {
  const [user, setUser] = useState("Pete");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component1 />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <>
      <h1>Component 2</h1>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Child />
    </>
  );
}