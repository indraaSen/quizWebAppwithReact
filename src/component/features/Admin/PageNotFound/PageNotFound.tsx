import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const PageNotFound = () =>{
    return(
        <div>
            <h1>Page Not Found</h1>
            <div>
            <NavLink to="/" > Sing In </NavLink>
            </div>
        </div>
    )
};

export default PageNotFound;