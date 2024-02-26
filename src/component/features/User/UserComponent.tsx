import React, { useContext } from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { userContext } from "../../MainComponent/MainComponent";
import { Outlet, useNavigate } from "react-router-dom";

const UserComponent = () =>{

    const userPages = [
        {name:'Home',path:'home'},
        {name:'Take Quiz', path:'takequiz'},
        {name:'Result', path:'result'},
        {name:'Setting', path:'setting'}
    ]

    const contextData = React.useContext(userContext);
    const navi = useNavigate();
    // console.log("contexdata of the loginuser from user component ", contextData.loginUserDetails);
    const setLoginUserDetails = () =>{
        contextData.setLoginUserDetails({});
        navi("/");
    }


    return(
        <div>
            <HeaderComponent pages ={userPages} contextData={contextData} setLoginUserDetails={setLoginUserDetails}/>
            <Outlet />
        </div>
    )
};

export default UserComponent;