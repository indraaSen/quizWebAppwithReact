import { Box, Card, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddNewAdmin = () =>{
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('admin')

    const addNewUser = async () =>{

        try {
                if(fullName.length !== 0 && email.length !== 0 && password.length !== 0 && confirmPassword.length !== 0 && userType.length !== 0){
                   if(password === confirmPassword){
                        const response = await axios.post("http://localhost:8080/admin/savenewadmin", {fullname :fullName , email, password, usertype:userType});
                        if (response.status === 200) {
                            alert("Account created");  
                            setFullName('');
                            setEmail('');
                            setPassword('');
                            setConfirmPassword('');
                        }
                   }else{
                    alert("Password did not matched")
                   }
                }else{
                    alert("Field should not be empty!!")
                }
            } catch (error) {
                alert("An error occurred during creating new admin. Please try again later.");
              }
          };

    return(
        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <Card sx={{ height:"700px" ,width:"480px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                <h1><b>Add New Admin</b></h1>
                <TextField id="outlined-basic" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Type" type="text" value="admin" variant="outlined" disabled/>
                <Button variant="contained" type="submit" color="primary" onClick={ addNewUser}>Add</Button>
            </Card>
        </Box>
    )
};

export default AddNewAdmin;