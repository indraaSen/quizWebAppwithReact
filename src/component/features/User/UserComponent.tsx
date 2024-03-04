import React from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";

const UserComponent = () =>{

    const userPages = [
        {name:'Home',path:'home'},
        {name:'Take Quiz', path:'takequiz'},
        {name:'Result', path:'result'},
        {name:'Setting', path:'setting'}
    ]

    return(
        <div>
            <HeaderComponent pages ={userPages}/>
            <Outlet />
        </div>
    )
};

export default UserComponent;