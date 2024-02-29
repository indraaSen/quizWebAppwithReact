import React from "react";
import HeaderComponent from "../../module/HeaderComponent/HeaderComponent";
import { userContext } from "../../MainComponent/MainComponent";
import { Outlet, useNavigate } from "react-router-dom";


const AdminComponent = () =>{

    const AdminPages = [
        {name:'Home', path:'home'},
        {name:'Add Questions', path:'addquestion'},
        {name:'All Questions', path:'allquestion'},
        {name:'All Users', path:'alluser'},
        {name:'Add New Admin', path:'addnewadmin'},
        {name:'Setting', path:'setting'}
    ]

    const contextData = React.useContext(userContext);
    const navi = useNavigate();

    const setLoginUserDetails = () =>{
        contextData.setLoginUserDetails({});
        navi("/");
    }

    return(
        <div>
            <HeaderComponent pages={AdminPages} contextData={contextData} setLoginUserDetails={setLoginUserDetails}/>
            <Outlet />
        </div>
    )
};

export default AdminComponent;