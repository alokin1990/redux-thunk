import React, { useState } from "react";

export default ({ props, getNewState }) => {
  const [data, setData] = useState([""]);
  return (
    <>
      <p>{props}</p>
      <input
        onChange={e => {
          return setData(e.target.value);
        }}
      ></input>
      <button onClick={() => getNewState(data)}>Action Dispatch Button</button>
    </>
  );
};
