import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  //  let [color, setcolor] = useState("Blue")
  // let count = 0
  // let [count, setCount] = useState(0);
  let count = useRef(0)
  let [num,setNum] =useState(0)
  

  // No dependencies
  useEffect(() => {
      count.current = count.current+1
  });

  return (
    <>
      <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setNum(++num)}>click Here</button>
      
    </>
  );
}

export default App;
