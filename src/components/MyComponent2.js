import React, { useState } from "react";

export default function MyComponent2(props) {
  const [clicks, setClicks] = useState(0);

  function clickHandler() {
    setClicks((prevClicks) => prevClicks + 1);
  }

  return (
    <div className="my-component" onClick={clickHandler}>
      <h2>My Component ({clicks} clicks)</h2>
      <h3>{props.headerText}</h3>
      {props.children}
    </div>
  );
}
