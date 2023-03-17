import React from "react";
import { Route,Routes } from "react-router-dom";
import CreateAccount from "./CreateAcnount";
import Home from "./Homes";
import Login from "./Login";
import SignIn from "./SignIn";
const Links=()=>{
    return(
        <Routes>
         <Route path="/" Component={Home}/>
         <Route path="/login" exact Component={Login}>
            <Route index Component={SignIn}/>
            <Route path="signIn" Component={SignIn}/>
            <Route path="signup" Component={CreateAccount}/>
         </Route>
        </Routes>
    )
}
export default Links