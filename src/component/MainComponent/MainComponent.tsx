
import React, { useContext, useState } from "react";
import AuthComponent from "../Auth/AuthComponent";
import UserComponent from "../features/User/UserComponent";
import AdminComponent from "../features/Admin/AdminComponent";
import SignInComponent from "../Auth/SignInComponent/SignInComponent";
import SignUpComponent from "../Auth/SignUpComponent/SignUpComponent";
import { Home } from "@mui/icons-material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "../features/Admin/PageNotFound/PageNotFound";
import Result from "../features/User/Result/Result";
import Setting from "../features/User/Setting/Setting";
import TakeQuiz from "../features/User/TakeQuiz/TakeQuiz";
import { userContext } from "../../App";

// export const userContext = React.createContext<any>({});


// const dynamicRoutes = [
//     {
//       path:'/',
//       element: <SignInComponent />
//     },
//     {
//       path:'/signup',
//       element: <SignUpComponent />
//     },
//     {
//       path:'/user',
//       element: <UserComponent />,
//       children:[
//         {
//           path:'home',
//           element:<Home />
//         },
//         {
//           path:'takequiz',
//           element:<TakeQuiz />
//         },
//         {
//           path:'result',
//           element:<Result />
//         },
//         {
//           path:'setting',
//           element:<Setting />
//         },
//       ]
//     },
//     {
//       path:"*",
//       element:<PageNotFound />
//     }
//   ];
  
// const router = createBrowserRouter(dynamicRoutes);
  

const MainComponent = () =>{

    const contextData = useContext(userContext);
    // const [loginUserDetails, setLoginUserDetails] = useState<any>({});

    // console.log("loginUserDetails from main component",loginUserDetails);
    // const allObj = {
    //     isSignUp,
    //     setIsSignUp,
    //     loginUserDetails,
    //     setLoginUserDetails
    // }
    return(

        <>
        {/* {Object.keys(loginUserDetails).length === 0 && <AuthComponent />} */}
        {/* {contextData.loginUserDetails.userType == 'user' && <UserComponent />}
        {contextData.loginUserDetails.userType === 'admin' && <AdminComponent />} */}
        </>
        
        
       
        
    )
};

export default MainComponent;