import React, { useEffect } from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import UserTable from "../../../module/UserTable/UserTable";
import { filterUser, getAllUsers } from "../../../APIs/APIs";

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
    getAllUsers(setRows);
  }, []);

  const handleChange = (event: string) => {
    setUserType(event);
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
          onClick={() => filterUser(userType, setRows)}
        >
          Find
        </button>
      </div>
      <UserTable heading={heading} rows={rows} />
    </div>
  );
};

export default AllUsers;
