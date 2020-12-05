import React, { useState,useMemo } from "react";
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Index} from "./pages";
import {About} from "./pages/about";
import { UserContext } from "./UserContext";

function App() {
  const [user,setUser] = useState(null);

  const providerValue = useMemo(() => ({user,setUser}),[user,setUser])
  //by providing useMemo, it prevents the provider value from changing,unless the value and setValue change 
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerValue}>
        {/* <UserContext.Provider value="Hello from context"> */}
          <Route path="/" exact component={Index}/>
          <Route path="/about/" component={About}/>
        </UserContext.Provider>
        
      </div>
    </Router> 

  );
}

export default App;
