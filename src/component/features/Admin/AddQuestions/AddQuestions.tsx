import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AddQuestions = () => {
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctanswer, setCorrectAnswer] = useState("");

  const addQuestion = async () => {
    try {
      const newQ = {
        subject,
        question,
        option1,
        option2,
        option3,
        option4,
        correctanswer,
      };
      if (
        subject.length !== 0 &&
        question.length !== 0 &&
        option1.length !== 0 &&
        option2.length !== 0 &&
        option3.length !== 0 &&
        option4.length !== 0 &&
        correctanswer
      ) {
        const newQuestion = await axios.post(
          "http://localhost:8080/admin/addnewquestion",
          newQ
        );
        if (newQuestion.status === 200) {
          alert("Question added");
          setSubject("");
          setQuestion("");
          setOption1("");
          setOption2("");
          setOption3("");
          setOption4("");
          setCorrectAnswer("");
        }
      } else {
        alert("Field should not be Empty!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <Card
          sx={{
            height: "700px",
            width: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "40px",
          }}
        >
          <h1>Add Question</h1>
          <TextField
            id="outlined-basic"
            label="Subject"
            onChange={(e) => setSubject(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Question"
            onChange={(e) => setQuestion(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Option1"
            onChange={(e) => setOption1(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Option2"
            onChange={(e) => setOption2(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Option3"
            onChange={(e) => setOption3(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Option4"
            onChange={(e) => setOption4(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="correct Answer"
            onChange={(e) => setCorrectAnswer(e.target.value)}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => addQuestion()}
          >
            Add
          </Button>
        </Card>
      </Box>
    </div>
  );
};

export default AddQuestions;
