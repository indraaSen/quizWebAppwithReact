
import React, { useContext, useState } from "react";
import AuthComponent from "../Auth/AuthComponent";
import AdminComponent from "../features/Admin/AdminComponent";
import UserComponent from "../features/User/UserComponent";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInComponent from "../Auth/SignInComponent/SignInComponent";

export const userContext = React.createContext<any>({});

const MainComponent = () =>{

  const route = [
    {
      path: '/',
      element: <SignInComponent />
    },
    {
      path: 'admin',
      element: <AdminComponent />
    },
    {
      path: 'user',
      element: <UserComponent />
    }
  ];

  
    const [loginUserDetails, setLoginUserDetails] = useState<any>({});
    const [isSignUp, setIsSignUp] = useState(false);
  
      const allObj = {
        isSignUp, 
        setIsSignUp,
        loginUserDetails,
        setLoginUserDetails
      }
  
      const routes: any = createBrowserRouter(route);
    return (
      <userContext.Provider value={allObj}>
            <RouterProvider router={routes} />
      </userContext.Provider>
       
      //   <userContext.Provider value={allObj}>
      //   {Object.keys(loginUserDetails).length === 0 && <AuthComponent />}
      //   {loginUserDetails.userType === 'user' && <UserComponent /> }
      //   {loginUserDetails.userType === 'admin' && <AdminComponent /> }
      // </userContext.Provider>
 
    );
  }
    

export default MainComponent;
