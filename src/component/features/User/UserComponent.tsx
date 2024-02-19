import React, { useContext } from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";
import TakeQuiz from "./TakeQuiz/TakeQuiz";
import { userContext } from "../../MainComponent/MainComponent";

const UserComponent = () =>{
    
    const userPages = ['Home', 'Take Quiz', 'Result', 'Setting'];
    const contextData = React.useContext(userContext);

    const userType = contextData.loginUserDetails.userType;
    const userName = contextData.loginUserDetails.fullName;
   
    const setLoginUserDetails = () =>{
        contextData.setLoginUserDetails({});
    }

    return(
        <div>
            <HeaderComponent pages ={userPages} loginUserDetails={userType} userName={userName} setLoginUserDetails={setLoginUserDetails}/>
            <TakeQuiz />
            <Outlet />
        </div>
    )
};

export default UserComponent;