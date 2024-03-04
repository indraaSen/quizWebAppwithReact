import { Box, Button, Card, TextField } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../../Slice/Login/user.login";
import { setIsSignUp } from "../../../Slice/Login/LoginReducer";
import { useState } from "react";

const SignInComponent = () =>{

    const userVal = useSelector((state:any) =>  state.login.userdata);
   
    const dispatch = useDispatch();
    const navi = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        
        LoginUser({ email, password }, dispatch, navi);
        if (userVal === null) {
          navi("/");
        }
        
    };


    return(

        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <Card sx={{height:"400px", width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                <h1 data-testid="h1-tag">Sign In</h1>
                <TextField id="outlined-basic" inputProps={{"data-testid":"email-input"}} label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" type="password" inputProps={{"data-testid":"password-input"}} label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <Button variant="contained" color="primary" onClick={()=> handleLogin()}>Sign In</Button>

                <span>
                    Do not have an Account ? <Button onClick={() => dispatch(setIsSignUp({isSignUp:true}))} variant="text">Sign Up</Button>  
                </span>
            </Card>
        </Box>
    )
}

export default SignInComponent;