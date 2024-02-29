import React, { useContext, useEffect, useState } from "react";
import DropDownComponent from "../../../module/DropDownComponent/DropDownComponent";
import CardComponent from "../../../module/CardComponent/CardComponent";
import PopupComponent from "../../../module/PopupComponent/PopupComponent";
import axios from "axios";
import { userContext } from "../../../MainComponent/MainComponent";

const TakeQuiz = () =>{
    const contextData = useContext(userContext);

    const loopValue = 5;
    const [subs, setSubs] = useState(['select'])
    const [quizSubject, setQuizSubject] = React.useState('');
    const [randQuestions, setRandQuestions] = React.useState<any>([]);
    const [hideButton, setHideButton] = React.useState('hidden');
    const [isSelected,setIsSelected] = React.useState<any>({});
    const [result, setResult] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [quizBtn, setQuizBtn] = useState(true);

    useEffect(() => {
        const allsubs =async ()=> {
            const allsubject = await axios.get("http://localhost:8080/admin/getallsubject");
            setSubs((prevSubs) => [...prevSubs , ...allsubject.data]);
        }
        allsubs();
    }, [])
    
    const handleChange = (event: string) => {
      setQuizSubject(event);
      setQuizBtn(false);
    };

    const startQuiz = async () =>{
       try {
           if(quizSubject !== 'select' && quizSubject !== null){

                const quizQuestion = await axios(`http://localhost:8080/user/takeaquiz?subject=${quizSubject}`);
                setRandQuestions(quizQuestion.data);
                setIsSelected({});
                setHideButton('');
                
            }else{
                alert("please select the subject");
            }
       } catch (error) {
            alert("Something went wrong or Not have Enough Questions!! Please try another subject.");
       }
    }

    const changeRadioValue = (index:number, val:string) =>{
        if (index < loopValue) {
            setIsSelected({ ...isSelected, [index]: val });
        }
    }

    const seeValue = async() =>{
        const finalAns:any = [];
        const userQuestion : any = [];
        const userSelectedAnswer:any = [];

        for (let i = 0; i < loopValue; i++) {
            userQuestion.push(randQuestions[i].randQue);   
        }

        Object.keys(isSelected).forEach(index => {
            userSelectedAnswer.push(isSelected[index]);
        });

        for (let j = 0; j < loopValue; j++) {
            if(userSelectedAnswer[j] === undefined){
                userSelectedAnswer[j] = 'Not Answered';
            }

            finalAns.push({"resultquestion": userQuestion[j], "checkoption": userSelectedAnswer[j], "subject":quizSubject, "useremail":contextData.loginUserDetails.email});
        } 
        const checkAnswer = await axios.post("http://localhost:8080/user/checkanswer", finalAns);
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
                <DropDownComponent handleChange={handleChange} quizSubject={quizSubject} subs={subs} DropDownHeading={'Subject'}/>
                <button className='border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white ' onClick={startQuiz} disabled={quizBtn}>Start</button>

            </div>

            <div className="pt-8 flex justify-center">
                <CardComponent randQuestions={randQuestions} hideButton={hideButton} changeRadioValue={changeRadioValue} isSelected={isSelected} seeValue={seeValue}/>
            </div>
            <PopupComponent result= {result} open={open} setOpen={setOpen}/>

        </div>
    )
};

export default TakeQuiz;