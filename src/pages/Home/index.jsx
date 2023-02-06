

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log("home")

  });
  return (
    <>
      <div className="intro">
        The home page
      </div>
      <h1>Home</h1>
    </>
  )

}