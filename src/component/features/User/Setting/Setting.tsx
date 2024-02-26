import React, { useContext, useState } from "react";
import AvatarComponent from "../../../module/AvatarComponent/AvatarComponent";
import styless from '../UserComponent.module.scss';
import { userContext } from "../../../MainComponent/MainComponent";
import CardComponentSetting from "../../../module/CardComponent.Setting/CardComponent.Setting";
import PopupComponentSetting from "../../../module/PopupComponentSetting/PopupComponentSetting";

const Setting = () =>{
    const contextData = useContext(userContext);

    const settingTabs = [contextData.loginUserDetails.fullName, 'password', contextData.loginUserDetails.email];

    const [open, setOpen] = useState(false);
    const [fields, setFields] = useState<any>([]);

    const changeData = (ind:number) =>{
        if(ind === 0){
            setFields(['email', 'User Name']);
            setOpen(true);
        }else if(ind === 1){
            setFields(['email', 'Password']);
            setOpen(true);
        }else if(ind === 2){
            setFields(['Password', 'email']);
            setOpen(true);
        }
    }

    return(
        <>
        <div style={{marginTop:"20vh"}}>
            <div className={styless['setting-div']}>
                <AvatarComponent avatarInitial={contextData.loginUserDetails.fullName.split('')[0]}/>
            </div>
            <div style={{display:"flex", justifyContent:"center", fontSize:"25px"}}>
            <h1><b>{contextData.loginUserDetails.fullName}</b></h1>
            </div>
            <div>
                {settingTabs.map((val,index)=><CardComponentSetting index={index} val={val} changeData={changeData} />)}
            </div>
        </div>
        {/* <PopupComponentSetting open={open} setOpen={setOpen} fields={fields}/> */}
        
        </>
        
        
    )
};

export default Setting;