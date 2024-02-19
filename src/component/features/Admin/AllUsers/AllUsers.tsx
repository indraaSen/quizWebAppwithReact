import React from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import UserTable from "../../../module/UserTable/UserTable";
import { getUserData } from "../../../../DummyData/UserData/UserData";

const AllUsers = () =>{

    const subs:string[] = ['select','user','admin'];
    const heading :string[] = ['id','Full Name', 'Email', 'Department', 'User Type'];

    const [userType, setUserType] = React.useState('');
    const [rows, setRows] = React.useState<any>();

    const handleChange = (event: string) => {
      setUserType(event);
    };

    const filterUser = () =>{
        const data:any = getUserData(userType);
        console.log("data from the all user component", data);
        setRows(data);
    }

    return(
        <div>
            <div className="flex pt-5 end-0">
                <h3 className="font-semibold text-2xl pt-2 pr-3">Filter Users: </h3>
                <DropDownComponent handleChange={handleChange} quizSubject={userType} subs={subs}/>
                <button className='border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white ' onClick={filterUser}>Start</button>
            </div>
            <UserTable heading={heading} rows={rows}/>
        </div>
    )
};

export default AllUsers;