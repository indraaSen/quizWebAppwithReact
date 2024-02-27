import React from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import CardComponent from "../../../module/CardComponent/CardComponent";
import PopupComponent from "../../../module/PopupComponent/PopupComponent";
import axios from "axios";

const TakeQuiz = () =>{

    const subs:string[] = ['select','html','css','javascript','reactjs','sql']

    const [quizSubject, setQuizSubject] = React.useState('');
    const [randQuestions, setRandQuestions] = React.useState<any>([]);
    const [hideButton, setHideButton] = React.useState('hidden');
    const [isSelected,setIsSelected] = React.useState<any>({});
    const [result, setResult] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: string) => {
      setQuizSubject(event);
      
    };

    const startQuiz = async () =>{
      
       const quizQuestion = await axios(`http://localhost:8080/user/takeaquiz?subject=${quizSubject}`);
       setRandQuestions(quizQuestion.data);
       setHideButton('');
    }

    const changeRadioValue = (index:number, val:string) =>{
        if (index < 5) {
            setIsSelected({ ...isSelected, [index]: val });
        }
    }

    const seeValue = async() =>{
        const UserSelectedAnswer:any = [];
        Object.keys(isSelected).forEach(index => {
            UserSelectedAnswer.push({"resultquestion" : (randQuestions[index].randQue), "checkoption" : isSelected[index]})
        });
        
        const checkAnswer = await axios.post("http://localhost:8080/user/checkanswer", UserSelectedAnswer);
        setResult(checkAnswer.data);
        setOpen(true);
        setRandQuestions([]);
        setHideButton('hidden');
    }

    return(
        <div>
            <h1 className=" text-3xl text-center pt-6 font-semibold underline ">Welcome to Quiz!</h1>

            <div className="flex pt-5">
                <h3 className="font-semibold text-2xl pt-2 pr-3">Please select quiz subject: </h3>
                <DropDownComponent handleChange={handleChange} quizSubject={quizSubject} subs={subs}/>
                <button className='border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white ' onClick={startQuiz} disabled={false}>Start</button>

            </div>

            <div className="pt-8 flex justify-center">
                <CardComponent randQuestions={randQuestions} hideButton={hideButton} changeRadioValue={changeRadioValue} isSelected={isSelected} seeValue={seeValue}/>
            </div>
            <PopupComponent result= {result} open={open} setOpen={setOpen}/>

        </div>
    )
};

export default TakeQuiz;