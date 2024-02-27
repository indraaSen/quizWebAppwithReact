
import React, { useContext, useState } from "react";
import AuthComponent from "../Auth/AuthComponent";
import AdminComponent from "../features/Admin/AdminComponent";
import UserComponent from "../features/User/UserComponent";
<<<<<<< HEAD
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useNavigate} from "react-router-dom";
import SignInComponent from "../Auth/SignInComponent/SignInComponent";
import SignUpComponent from "../Auth/SignUpComponent/SignUpComponent";
import Home from "../features/User/Home/Home";
import Result from "../features/User/Result/Result";
import Setting from "../features/User/Setting/Setting";
import TakeQuiz from "../features/User/TakeQuiz/TakeQuiz";
import AdminHome from "../features/Admin/AdminHome/AdminHome";
import AddQuestions from "../features/Admin/AddQuestions/AddQuestions";
import AllQuestions from "../features/Admin/AllQuestions/AllQuestions";
import AllUsers from "../features/Admin/AllUsers/AllUsers";
import AdminSetting from "../features/Admin/AdminSetting/AdminSetting";
import ErrorHandle from "../ErrorHandle/ErrorHandle";

=======
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInComponent from "../Auth/SignInComponent/SignInComponent";
>>>>>>> 7421a259abc6e9db83a3f54e51f04ee13a60e38d

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
    const [singUpBtn, setSingUpBtn] = useState([]);

      const allObj = {
        isSignUp, 
        setIsSignUp,
        loginUserDetails,
        setLoginUserDetails,
        singUpBtn,
        setSingUpBtn
      }
<<<<<<< HEAD

    return (
       
      <userContext.Provider value={allObj}>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthComponent />} />
          <Route path="/signin" element={<SignInComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/user" element={<UserComponent />}>
            <Route path="home" element={<Home />} />
            <Route path="result" element={<Result />} />
            <Route path="setting" element={<Setting />} />
            <Route path="takequiz" element={<TakeQuiz />} />
          </Route>
          <Route path="/admin" element={<AdminComponent />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="addquestion" element={<AddQuestions />} />
            <Route path="allquestion" element={<AllQuestions />} />
            <Route path="alluser" element={<AllUsers />} />
            <Route path="setting" element={<AdminSetting />} />
          </Route>
          <Route path="*" element={<ErrorHandle />} />
        </Routes>
      </BrowserRouter>
        {/* {Object.keys(loginUserDetails).length === 0 } */}
        {/* {loginUserDetails.userType === 'user' && <UserComponent /> }
        {loginUserDetails.userType === 'admin' && <AdminComponent /> } */}
      </userContext.Provider>
=======
  
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
>>>>>>> 7421a259abc6e9db83a3f54e51f04ee13a60e38d
 
    );
  }
    

export default MainComponent;
