import React, { useEffect } from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import UserTable from "../../../module/UserTable/UserTable";
import axios from "axios";

const AllUsers = () => {
  const subs: string[] = ["select all", "user", "admin"];
  const heading: string[] = [
    "id",
    "Full Name",
    "Email",
    "Password",
    "User Type",
  ];

  const [userType, setUserType] = React.useState("");
  const [rows, setRows] = React.useState<any>();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const users = await axios.get("http://localhost:8080/admin/getallusers");
    setRows(users.data);
  };

  const handleChange = (event: string) => {
    setUserType(event);
  };

  const filterUser = async () => {
    if (userType === "admin") {
      const alluser = await axios.get(
        "http://localhost:8080/admin/getallusers/usertype?usertype=admin"
      );
      setRows(alluser.data);
    } else if (userType === "user") {
      const alluser = await axios.get(
        "http://localhost:8080/admin/getallusers/usertype?usertype=user"
      );
      setRows(alluser.data);
    } else if (userType === "select all") {
      getAllUsers();
    } else {
      alert("Please select the correct value");
    }
  };

  return (
    <div>
      <div className="flex pt-5 end-0 mb-5">
        <h3 className="font-semibold text-2xl pt-2 pr-3">Filter Users: </h3>
        <DropDownComponent
          handleChange={handleChange}
          quizSubject={userType}
          subs={subs}
          DropDownHeading={"UserType"}
        />
        <button
          className="border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white "
          onClick={filterUser}
        >
          Find
        </button>
      </div>
      <UserTable heading={heading} rows={rows} />
    </div>
  );
};

export default AllUsers;
