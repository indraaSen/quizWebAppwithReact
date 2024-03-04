import axios from "axios";
import { setUserData } from "./LoginReducer";

export const LoginUser = async (loginObj: any,dispatch: any, navi:any) => {
        try {
            const email = loginObj.email;
            const password = loginObj.password
            const response = await axios.post('http://localhost:8080/user/login',{email, password});
          if (response.status === 200) {
            dispatch(setUserData({userdata:response.data}));
            const userType = response.data.usertype;
            navi(userType === 'user' ? '/user/home' : '/admin/home');
          } else {
            alert("Login failed. Please check your credentials.");
          }
        } catch (error) {
          alert("An error occurred during login. Please try again later.");
        }
      };