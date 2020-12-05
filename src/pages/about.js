import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About(){
    // const msg = useContext(UserContext);
    const {user} = useContext(UserContext);

    return (
        <div>
            <h2>about</h2>
           
            <p>{JSON.stringify(user,null,2)}</p>
            {/* <p>{msg}</p> */}
        </div>
    )
}