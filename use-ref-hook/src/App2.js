import React , { useEffect, useState,useRef } from "react";

export default function App(){
  const [name,setName] = useState("");
  // const [renderCount,setRenderCount ] = useState(0);
  
  const renderCount = useRef(0)

  useEffect(() => {
    // setRenderCount(prevRenderCount => prevRenderCount + 1)
    // setRenderCount(renderCount+1)
    renderCount.current = renderCount.current + 1;
  })
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times </div>
    </>
  )
}