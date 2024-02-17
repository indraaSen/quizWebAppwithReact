import React, { useContext } from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";
import { userContext } from "../../../App";
import TakeQuiz from "./TakeQuiz/TakeQuiz";

const UserComponent = () =>{
    
    // const userPages = ['Home', 'Take Quiz', 'Result', 'Setting'];
    const contextData = React.useContext(userContext);

    console.log("contexdata.loginUserDetails from user component ", contextData.loginUserDetails.userType);
    const userType = contextData.loginUserDetails.userType;
    const userName = contextData.loginUserDetails.fullName;
    const userPages = [
        {name:'Home', path:'home'},
        {name:'Take Quiz', path:'takequiz'},
        {name:'Result', path:'result'},
        {name:'Setting', path:'setting'}
    ]
    const setLoginUserDetails = () =>{
        contextData.setLoginUserDetails({});
    }

    return(
        <div>
            <HeaderComponent pages ={userPages} loginUserDetails={userType} userName={userName} setLoginUserDetails={setLoginUserDetails}/>
            {/* <h1>this is user component.</h1> */}
            <TakeQuiz />
            {/* <Outlet /> */}
        </div>
    )
};

export default UserComponent;