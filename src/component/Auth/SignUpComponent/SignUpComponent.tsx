import { useState } from "react";
import { Box, TextField, Button, Card } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsSignUp } from "../../../Slice/Login/LoginReducer";

const SignUpComponent = () =>{

    const dispatch = useDispatch();
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('user')

    const addNewUser = async () =>{

        try {
                if(fullName.length !== 0 && email.length !== 0 && password.length !== 0 && confirmPassword.length !== 0 && userType.length !== 0){
                   if(password === confirmPassword){
                        const response = await axios.post("http://localhost:8080/user/saveuser", {fullname :fullName , email, password, usertype:userType});

                        if (response.status === 201) {
                            alert("Account created");
                            window.location.href = '/';    
                        } else {
                            alert("Please check your credentials.");
                        }
                   }else{
                    alert("Password did not matched")
                   }
                }else{
                    alert("Field should not be empty!!")
                }
            } catch (error) {
                alert("An error occurred during sign up. Please try again later.");
              }
          };

    return(
        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <Card sx={{ height:"700px" ,width:"480px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                <h1>Sign Up</h1>
                <TextField id="outlined-basic" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Type" type="text" value="user" variant="outlined" disabled/>
                <Button variant="contained" type="submit" color="success" onClick={ addNewUser}>Sign Up</Button>

                <span>
                    Already have an Account ? <Button variant="text" onClick={() => dispatch(setIsSignUp({isSignUp:false}))}>SignIn</Button>
                </span>
            
            </Card>
        </Box>
    )
};

export default SignUpComponent;