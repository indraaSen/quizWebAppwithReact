import React, { useEffect, useState } from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import TableComponent from "../../../module/TableComponent/TableComponent";
import axios from "axios";

const AllQuestions = () =>{

    const heading :string[] = ['id','Subject','Question','Option1','Option2','Option3','Option4','Correct Answer'];
    const [quizSubject, setQuizSubject] = React.useState('');
    const [subName, setSubName] = React.useState('');
    const [subs, setSubs] = useState(['select']);
    const [que, setQue] = useState([]);
    const [changeDisable, setChangeDisable] = useState(true);

    useEffect(() => {
        const allsubs =async ()=> {
            const allsubject = await axios.get("http://localhost:8080/admin/getallsubject");
            setSubs((prevSubs) => [...prevSubs , ...allsubject.data]);
        }
        allsubs();
        getAllQuestion();
    }, [])

    const getAllQuestion = async () =>{
        const allQuestion = await axios.get("http://localhost:8080/admin/getallquestions");
        setQue(allQuestion.data);
    }

    const handleChange = (event: string) => {
        if(event){
            setChangeDisable(false);
        }
      setQuizSubject(event);
    };

    const filterQuestion = async () =>{
        
        const filteredQuestion = await axios.get(`http://localhost:8080/admin/getallquestions/subject?subject=${quizSubject}`)
        setQue(filteredQuestion.data);
        
    }

    return (
        <div>
            <div className="flex pt-5 end-0 mb-5">
                <h3 className="font-semibold text-2xl pt-2 pr-3">Filter Questions: </h3>
                <DropDownComponent handleChange={handleChange} quizSubject={quizSubject} subs={subs} DropDownHeading={'Subject'}/>
                <button className='border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white ' onClick={filterQuestion} disabled={changeDisable}>Start</button>
            </div>
            
            <TableComponent rows={que} subName={subName} heading={heading}/>
        </div>
    )
};

export default AllQuestions;