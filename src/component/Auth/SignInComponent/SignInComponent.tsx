import { Box, Button, Card, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { checkUser } from "../../../DummyData/UserData/UserData";

const SignInComponent = () =>{

    const contextData = useContext(userContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const checkLoginUser = async (loginObj:any) =>{

        const loginDetails:any = await checkUser(loginObj.email, loginObj.password).catch((err) => alert(err));

        if(loginDetails && loginDetails.code == 200){
            console.log("loginDetails.userData)",loginDetails.userData);
            contextData.setLoginUserDetails(loginDetails.userData);
        }else{
            alert("User not found");
        }
    }

    const LoginUser = () =>{
        const loginObj = {
            email, password
        }
        checkLoginUser(loginObj)
    }

    return(

        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <Card sx={{height:"400px", width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                <h1>Sign In</h1>
                <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <Button variant="contained" color="primary" onClick={()=> LoginUser()}>Sign In</Button>

                <span>
                    Do not have an Account ? <Button onClick={() => contextData.setIsSignUp(true)} variant="text">Sign Up</Button>
                </span>
            </Card>
        </Box>
    )
}

export default SignInComponent;