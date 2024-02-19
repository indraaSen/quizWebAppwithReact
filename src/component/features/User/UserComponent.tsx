import React, { useContext } from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import TakeQuiz from "./TakeQuiz/TakeQuiz";
import { userContext } from "../../MainComponent/MainComponent";
import Home from "./Home/Home";
import Result from "./Result/Result";
import Setting from "./Setting/Setting";

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
            {/* <Home /> */}
            <TakeQuiz />
            {/* <Result /> */}
            {/* <Setting/> */}
            
        </div>
    )
};

export default UserComponent;