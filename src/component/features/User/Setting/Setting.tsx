import React, { useState } from "react";
import AvatarComponent from "../../../module/AvatarComponent/AvatarComponent";
import styless from "../UserComponent.module.scss";
import CardComponentSetting from "../../../module/CardComponent.Setting/CardComponent.Setting";
import { useDispatch, useSelector } from "react-redux";
import { changeUserCredentials } from "../../../APIs/APIs";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const cardHeadText = ["User Name", "Password", "Email"];

  const userDetail = useSelector((state: any) => state.login.userdata);

  const [open, setOpen] = useState(false);
  const [textField1, setTextField1] = useState("");
  const [textField2, setTextField2] = useState("");
  const [textvalue, setTextValue] = useState<any>([]);

  const dispatch = useDispatch();
  const navi = useNavigate();
  const openUserName = async (buttonName: string) => {
    if (buttonName === "User Name") {
      setTextValue(["Email", "User Name"]);
      setOpen(true);
    } else if (buttonName === "Password") {
      setTextValue(["Email", "Password"]);
      setOpen(true);
    } else if (buttonName === "Email") {
      setTextValue(["Password", "Email"]);
      setOpen(true);
    }
  };

  const changeData = (val1: string, val2: string) => {
    changeUserCredentials(
      val1,
      val2,
      textField1,
      textField2,
      userDetail,
      setOpen,
      dispatch,
      navi
    );
  };

  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        <div className={styless["setting-div"]}>
          <AvatarComponent
            avatarInitial={
              userDetail && userDetail.fullname.split("")[0].toUpperCase()
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
          }}
        >
          <h1>
            <b>{userDetail && userDetail.fullname}</b>
          </h1>
        </div>
      </div>

      {cardHeadText.map((val) => (
        <CardComponentSetting
          textName={val}
          openPopup={openUserName}
          open={open}
          setOpen={setOpen}
          setTextField1={setTextField1}
          setTextField2={setTextField2}
          textvalue={textvalue}
          changeData={changeData}
        />
      ))}
    </>
  );
};

export default Setting;
