import React,{useState,useEffect} from "react";
import './App.css';
import useLocalStorage from "./useLocalStorage";
//import useUpdateLogger from  "./useUpdateLogger";

function App() {

   const [name,setName] = useState("");
  //const [name,setName] = useLocalStorage("name", "");
  //useUpdateLogger(name);

  function saveToLocalStorage(e){
      if(name !== e.target.value){
        setName(e.target.value);
        localStorage.setItem("name",JSON.stringify(e.target.value));
      }
      
    
   
  } 

 

  useEffect(() => {
    console.log(name);
  },[name])

  return (
    <input 
      type="text"
      value={name}
      // onChange={e => setName(e.target.value)}
      onChange={e => saveToLocalStorage(e)}
      />
  );
}

export default App;
