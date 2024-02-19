import React from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { userContext } from "../../MainComponent/MainComponent";
import AddQuestions from "./AddQuestions/AddQuestions";
import AllQuestions from "./AllQuestions/AllQuestions";
import AllUsers from "./AllUsers/AllUsers";
import Setting from "./Setting/Setting";
import Home from "./Home/Home";

const AdminComponent = () =>{

    const userPages = ['Home', 'Add Questions', ' All Questions', 'Users', 'Setting'];
    const contextData = React.useContext(userContext);

    const userType = contextData.loginUserDetails.userType;
    const userName = contextData.loginUserDetails.fullName;
   
    const setLoginUserDetails = () =>{
        contextData.setLoginUserDetails({});
    }

    return(
        <div>
            <HeaderComponent pages={userPages}  loginUserDetails={userType} userName={userName} setLoginUserDetails={setLoginUserDetails}/>
            {/* <Home /> */}
            {/* <AddQuestions /> */}
            {/* <AllQuestions /> */}
            {/* <AllUsers /> */}
            {/* <Setting /> */}

        </div>
    )
};

export default AdminComponent;