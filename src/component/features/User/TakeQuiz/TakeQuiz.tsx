import React from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import { SelectChangeEvent } from "@mui/material";
import CardComponent from "../../../module/CardComponent/CardComponent";
import { giveAnswer } from "../../../../DummyData/DummyQuestions/DummyQuestions";

const TakeQuiz = () =>{

    const subs:string[] = ['select','html','css','javascript','reactjs','sql']

    const [quizSubject, setQuizSubject] = React.useState('');
    const [randQuestions, setRandQuestions] = React.useState<any>([]);

    const handleChange = (event: string) => {
      setQuizSubject(event);
      
    };

    const startQuiz = () =>{
      
        if(quizSubject !== 'select'){
            const newQuestions = giveAnswer(quizSubject);
            setRandQuestions(newQuestions);  
        }
    }

    return(
        <div>
            <h1 className=" text-3xl text-center pt-6 font-semibold underline ">Welcome to Quiz!</h1>

            <div className="flex pt-5">
                <h3 className="font-semibold text-2xl pt-2 pr-3">Please select quiz subject: </h3>
                <DropDownComponent handleChange={handleChange} quizSubject={quizSubject} subs={subs}/>
                <button className='border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white mb-2' onClick={startQuiz}>Start</button>

            </div>

            <div className="pt-8 flex justify-center">
                <CardComponent randQuestions={randQuestions}/>
            </div>

        </div>
    )
};

export default TakeQuiz;