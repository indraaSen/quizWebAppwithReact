import React from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { Outlet } from "react-router-dom";


const AdminComponent = () =>{

    const AdminPages = [
        {name:'Home', path:'home'},
        {name:'Add Questions', path:'addquestion'},
        {name:'All Questions', path:'allquestion'},
        {name:'All Users', path:'alluser'},
        {name:'Add New Admin', path:'addnewadmin'},
        {name:'Setting', path:'setting'}
    ]

    return(
        <div>
            <HeaderComponent pages={AdminPages} />
            <Outlet />
        </div>
    )
};

export default AdminComponent;