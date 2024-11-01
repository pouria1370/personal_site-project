import React, { useEffect, useRef, useState } from "react";

export default function Pouria() {
  const [first, setfirst] = useState<number>(0);
  const firstRef = useRef(0);
  const increment = () => {
    setfirst((prev) => prev + 1);
    console.log("ia m rendered from increment func", first);
  };
  useEffect(() => {
    firstRef.current = firstRef.current + 1;
    console.log("i am rendered from body of usseefeect");

    return () => {
      console.log("i am rendered from return of usseefeect");
    };
  }, [first]);

  console.log("i nam rendered from sync pipieline in code");
  return (
    <div>
      <button onClick={() => increment()}>increment</button>
      <p>increment is {firstRef.current}</p>
    </div>
  );
}
