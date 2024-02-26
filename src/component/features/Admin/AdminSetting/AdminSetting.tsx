import { useContext } from "react";
import { userContext } from "../../../MainComponent/MainComponent";
import styless from '../AdminComponent.module.scss';
import AvatarComponent from "../../../module/AvatarComponent/AvatarComponent";
const AdminSetting = () =>{
    const contextData = useContext(userContext);
    return(
        <>
        <div style={{marginTop:"20vh"}}>
            <div className={styless['setting-div']}>
                <AvatarComponent avatarInitial={contextData.loginUserDetails.fullName.split('')[0]}/>
            </div>
            <div style={{display:"flex", justifyContent:"center", fontSize:"25px"}}>
            <h1><b>{contextData.loginUserDetails.fullName}</b></h1>
            </div>
        </div>
        
        </>
        
        
    )
};

export default AdminSetting;