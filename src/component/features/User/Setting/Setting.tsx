import React, { useState } from "react";
import AvatarComponent from "../../../module/AvatarComponent/AvatarComponent";
import styless from "../UserComponent.module.scss";
import CardComponentSetting from "../../../module/CardComponent.Setting/CardComponent.Setting";
import axios from "axios";
import { useSelector } from "react-redux";

const Setting = () => {
  const cardHeadText = ["User Name", "Password", "Email"];
  const userDetail = useSelector((state: any) => state.login.userdata);

  const [open, setOpen] = useState(false);
  const [textField1, setTextField1] = useState("");
  const [textField2, setTextField2] = useState("");
  const [textvalue, setTextValue] = useState<any>([]);

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

  const changeData = async (val1: string, val2: string) => {
    if (val1 === "Email" && val2 === "User Name") {
      const email = textField1;
      const fullname = textField2;
      if (userDetail.email === email) {
        const changeusername = await axios.post(
          "http://localhost:8080/user/updateusername",
          { email, fullname }
        );
        if (changeusername.status === 200) {
          setOpen(false);
          alert("User Name Changed! Please LogIn again");
        } else {
          alert("something went wrong!!");
        }
      } else {
        alert("Enter valid email!!");
      }
    } else if (val1 === "Email" && val2 === "Password") {
      const email = textField1;
      const password = textField2;
      if (userDetail.email === email) {
        const changeusername = await axios.post(
          "http://localhost:8080/user/updateuserpassword",
          { email, password }
        );
        if (changeusername.status === 200) {
          setOpen(false);
          alert("Password Changed! Please LogIn again");
        } else {
          alert("something went wrong!!");
        }
      } else {
        alert("Enter valid email!!");
      }
    } else if (val1 === "Password" && val2 === "Email") {
      const password = textField1;
      const email = textField2;
      if (userDetail.password === password) {
        const changeusername = await axios.post(
          "http://localhost:8080/user/updateuseremail",
          { password, email }
        );
        if (changeusername.status === 200) {
          setOpen(false);
          alert("Email Changed! Please LogIn again");
        } else {
          alert("something went wrong!!");
        }
      } else {
        alert("Enter vaild password");
      }
    }
  };

  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        <div className={styless["setting-div"]}>
          <AvatarComponent
            avatarInitial={userDetail.fullname.split("")[0].toUpperCase()}
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
            <b>{userDetail.fullname}</b>
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
