import { Button } from "@mui/material";

const AdminHome = () =>{
    return (
        <>
            <div>this is AdminHome of the admin component.</div>
            <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden/>
            </Button>
        
        </>
    )
};

export default AdminHome;