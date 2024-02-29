
import React, { useState } from "react";
import AuthComponent from "../Auth/AuthComponent";
import AdminComponent from "../features/Admin/AdminComponent";
import UserComponent from "../features/User/UserComponent";
import { BrowserRouter, Route, Routes} from "react-router-dom";
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
import AddNewAdmin from "../features/Admin/AddNewAdmin/AddNewAdmin";


export const userContext = React.createContext<any>({});

const MainComponent = () =>{

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
            <Route path="addnewadmin" element={<AddNewAdmin/>} />
            <Route path="setting" element={<AdminSetting />} />
          </Route>
          <Route path="*" element={<ErrorHandle />} />
        </Routes>
      </BrowserRouter>
      </userContext.Provider>
 
    );
  }
    

export default MainComponent;