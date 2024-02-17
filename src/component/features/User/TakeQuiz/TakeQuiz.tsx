import React from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import { SelectChangeEvent } from "@mui/material";
import CardComponent from "../../../module/CardComponent/CardComponent";

const TakeQuiz = () =>{

    const subs:string[] = ['Select','HTML','CSS','JavaScript','ReactJs','SQL']

    const [quizSubject, setQuizSubject] = React.useState('');

    const handleChange = (event: string) => {
      setQuizSubject(event);
    };

    console.log("quizSubject",quizSubject)
    return(
        <div>
            <h1 className=" text-3xl text-center pt-6 font-semibold underline ">Welcome to Quiz!</h1>

            <div className="flex pt-5">
                <h3 className="font-semibold text-2xl pt-2 pr-3">Please select quiz subject: </h3>
                <DropDownComponent handleChange={handleChange} quizSubject={quizSubject} subs={subs}/>
            </div>

            <div className="pt-8 flex justify-center">
                <CardComponent />
            </div>

        </div>
    )
};

export default TakeQuiz;