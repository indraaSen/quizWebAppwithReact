import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './component/MainComponent/MainComponent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import SignInComponent from './component/Auth/SignInComponent/SignInComponent';
import SignUpComponent from './component/Auth/SignUpComponent/SignUpComponent';
import PageNotFound from './component/features/Admin/PageNotFound/PageNotFound';
import Result from './component/features/User/Result/Result';
import Setting from './component/features/User/Setting/Setting';
import TakeQuiz from './component/features/User/TakeQuiz/TakeQuiz';
import UserComponent from './component/features/User/UserComponent';
import AdminComponent from './component/features/Admin/AdminComponent';
import AuthComponent from './component/Auth/AuthComponent';



export const userContext = React.createContext<any>({});

const dynamicRoutes = [
  // {
  //   path:'/',
  //   element: <SignInComponent />
  // },
  // {
  //   path:'/signup',
  //   element: <SignUpComponent />
  // },
  {
    path:'/user',
    element: <UserComponent />,
    children:[
      {
        path:'home',
        element:<Home />
      },
      {
        path:'takequiz',
        element:<TakeQuiz />
      },
      {
        path:'result',
        element:<Result />
      },
      {
        path:'setting',
        element:<Setting />
      },
    ]
  },
  // {
  //   path:"*",
  //   element:<PageNotFound />
  // }
];

const router = createBrowserRouter(dynamicRoutes);


function App() {

  const [loginUserDetails, setLoginUserDetails] = useState<any>({});
  const [isSignUp, setIsSignUp] = useState(false);

    console.log("loginUserDetails from main component",loginUserDetails);
    const allObj = {
      isSignUp, 
      setIsSignUp,
      loginUserDetails,
      setLoginUserDetails
    }

    console.log("loginuserdetails from app ", loginUserDetails)
  return (
    <>

      <userContext.Provider value={allObj}>
        
        
        {/* <MainComponent /> */}
        {Object.keys(loginUserDetails).length === 0 && <AuthComponent />}
        {loginUserDetails.userType === 'user' && <UserComponent /> }
        {loginUserDetails.userType === 'admin' && <AdminComponent /> }
        {/* <RouterProvider router={router}/> */}
      </userContext.Provider>
    
    
    </>
 
  );
}

export default App;
