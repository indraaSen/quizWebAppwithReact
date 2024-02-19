import React from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import TableComponent from "../../../module/TableComponent/TableComponent";
import { getAllQuestions } from "../../../../DummyData/DummyQuestions/DummyQuestions";

const AllQuestions = () =>{

    const subs:string[] = ['select','html','css','javascript','reactjs','sql']

    const heading :string[] = ['id','Subject','Question','Option1','Option2','Option3','Option4','Correct Answer'];
    const [quizSubject, setQuizSubject] = React.useState('');
    const [allQue, setAllQue] = React.useState<any>();
    const [subName, setSubName] = React.useState('');

    const handleChange = (event: string) => {
      setQuizSubject(event);
    };

    const filterQuestion = () =>{
        setSubName(quizSubject);
        const allQ = getAllQuestions(quizSubject);
        setAllQue(allQ);
    }

    return (
        <div>
            <div className="flex pt-5 end-0">
                <h3 className="font-semibold text-2xl pt-2 pr-3">Filter Questions: </h3>
                <DropDownComponent handleChange={handleChange} quizSubject={quizSubject} subs={subs}/>
                <button className='border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white ' onClick={filterQuestion}>Start</button>

            </div>
            
            <TableComponent rows={allQue} subName={subName} heading={heading}/>
        </div>
    )
};

export default AllQuestions;