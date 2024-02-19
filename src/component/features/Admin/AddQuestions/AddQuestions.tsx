import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { newQuestion } from "../../../../DummyData/DummyQuestions/DummyQuestions";

const AddQuestions = () =>{

    const [subject, setSubject ]= useState('');
    const [question, setQuestion ]= useState('');
    const [option1, setOption1 ]= useState('');
    const [option2, setOption2 ]= useState('');
    const [option3, setOption3 ]= useState('');
    const [option4, setOption4 ]= useState('');
    const [correctAnswer, setCorrectAnswer ]= useState('');

    const addQuestion =  async() =>{

        const newQ = {
            subject,question, option1,option2,option3,option4,correctAnswer
        }
        const addingNewQuestion = await newQuestion(newQ);
        console.log('addingNewQuestion',addingNewQuestion);
    }


    return (
        <div>

            <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
                <Card sx={{height:"700px", width:"700px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                    <h1>Add Question</h1>
                    <TextField id="outlined-basic" label="Subject" onChange={(e) => setSubject(e.target.value)} variant="outlined" />
                    <TextField id="outlined-basic" label="Question" onChange={(e) => setQuestion(e.target.value)} variant="outlined" />
                    <TextField id="outlined-basic" label="Option1" onChange={(e) => setOption1(e.target.value)} variant="outlined" />
                    <TextField id="outlined-basic" label="Option2" onChange={(e) => setOption2(e.target.value)} variant="outlined" />
                    <TextField id="outlined-basic" label="Option3" onChange={(e) => setOption3(e.target.value)} variant="outlined" />
                    <TextField id="outlined-basic" label="Option4" onChange={(e) => setOption4(e.target.value)} variant="outlined" />
                    <TextField id="outlined-basic" label="correct Answer" onChange={(e) => setCorrectAnswer(e.target.value)} variant="outlined" />
                    <Button variant="contained" color="primary" onClick={() => addQuestion()} >Add</Button>
                </Card>
            </Box>
        </div>
    )
};

export default AddQuestions;