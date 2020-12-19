import React, { useState, useEffect, useRef} from "react";

export default function App(){
    const [name,setName] = useState(" ");
    // const inputRef = useRef()
    const prevName = useRef('');

    // function focus(){
        
    //     // console.log(inputRef.current );
    //     inputRef.current.focus() ;
    //     inputRef.current.value = "some value"
    //     setName("some value")
    // }

    useEffect(() => {
        prevName.current = name;
    },[name])

    return (
        <>
          {/* <input value={name} onChange={e => setName(e.target.value)}/> */}
          {/* <input ref={inputRef} onChange={e => setName(e.target.value)}/> */}
          <input value={name} onChange={e => setName(e.target.value)}/>
          <div>My name is {name} and it used to be {prevName.current}</div>
          {/* <div>My name is {inputRef.current ?  inputRef.current.value : name}</div> */}
          {/* <div>I rendered {renderCount.current} times </div> */}
          {/* <button onClick = {focus}>Focus</button> */}
        </>
      )
}