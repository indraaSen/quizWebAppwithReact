
import React, { useContext, useState } from "react";
import AuthComponent from "../Auth/AuthComponent";
import AdminComponent from "../features/Admin/AdminComponent";
import UserComponent from "../features/User/UserComponent";

export const userContext = React.createContext<any>({});

const MainComponent = () =>{

    const [loginUserDetails, setLoginUserDetails] = useState<any>({});
    const [isSignUp, setIsSignUp] = useState(false);
  
      console.log("loginUserDetails from main component",loginUserDetails);
      const allObj = {
        isSignUp, 
        setIsSignUp,
        loginUserDetails,
        setLoginUserDetails
      }
  
    return (
        <userContext.Provider value={allObj}>
          {Object.keys(loginUserDetails).length === 0 && <AuthComponent />}
          {loginUserDetails.userType === 'user' && <UserComponent /> }
          {loginUserDetails.userType === 'admin' && <AdminComponent /> }
        </userContext.Provider>
   
    );
  }
    

export default MainComponent;