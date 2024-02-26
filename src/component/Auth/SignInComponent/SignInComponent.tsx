import { Box, Button, Card, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { checkUser } from "../../../DummyData/UserData/UserData";
import { userContext } from "../../MainComponent/MainComponent";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignInComponent = () =>{

    const contextData = useContext(userContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navi = useNavigate();

    const LoginUser = async () => {
        try {
          const response = await axios.post('http://localhost:8080/user/login', {
            email,password
          });

          if (response.status === 200) {
            contextData.setLoginUserDetails(response.data);
            const userType = response.data.usertype;
            navi(userType === 'user' ? '/user/home' : '/admin/home');
          } else {
            
            alert("Login failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Error logging in:", error);
          alert("An error occurred during login. Please try again later.");
        }
      };


    return(

        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <Card sx={{height:"400px", width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                <h1 data-testid="h1-tag">Sign In</h1>
                <TextField id="outlined-basic" inputProps={{"data-testid":"email-input"}} label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" type="password" inputProps={{"data-testid":"password-input"}} label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <Button variant="contained" color="primary" onClick={()=> LoginUser()}>Sign In</Button>

                <span>
                    Do not have an Account ? <Button onClick={() => contextData.setIsSignUp(true)} variant="text">Sign Up</Button>
                </span>
            </Card>
        </Box>
    )
}

export default SignInComponent;