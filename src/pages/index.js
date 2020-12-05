import React,{useContext} from "react";
import { UserContext } from "../UserContext";
import {login} from "../utils/login";

export function Index(){
    const {user,setUser} = useContext(UserContext);

    return (
        <div>
            <h2>Home</h2>
            <p>{JSON.stringify(user,null,2)}</p>
            { user ? (
                <button onClick={() => {
                    setUser(null);
                }
                }>Logout</button>
            ): ( 
            <button 
                onClick={ async () => {
                    const user = await login();
                 setUser(user)
                }}>
                    Login
                </button>
            )}
        </div>
    )
}