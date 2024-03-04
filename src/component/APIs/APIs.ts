import axios from "axios";
import { setUserData } from "../../Slice/Login/LoginReducer";

//user apis

//below funtion will help to create new user.
export const addNewUser = async (
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
  userType: string
) => {
  try {
    if (
      fullName.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      confirmPassword.length !== 0 &&
      userType.length !== 0
    ) {
      if (password === confirmPassword) {
        const response = await axios.post(
          "http://localhost:8080/user/saveuser",
          { fullname: fullName, email, password, usertype: userType }
        );

        if (response.status === 201) {
          alert("Account created");
          window.location.href = "/";
        } else {
          alert("Please check your credentials.");
        }
      } else {
        alert("Password did not matched");
      }
    } else {
      alert("Field should not be empty!!");
    }
  } catch (error) {
    alert("An error occurred during sign up. Please try again later.");
  }
};

//below method will return result of the current user.
export const showResult = async (
  userDetail: any,
  setResultData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const tempArr: any[][] = [];
    let subArr: any[] = [];
    let count = 0;
    const result = await axios.get(
      `http://localhost:8080/user/result?useremail=${userDetail.email}`
    );
    for (let i = 0; i < result.data.length; i++) {
      subArr.push({
        resultid: result.data[i].resultid,
        subject: result.data[i].subject,
        resultquestion: result.data[i].resultquestion,
        optionselected: result.data[i].optionselected,
        correctoption: result.data[i].correctoption,
      });

      count++;
      if (count % 5 === 0) {
        subArr.push({ score: result.data[i].score });
        tempArr.push(subArr);
        subArr = [];
      }
    }
    if (subArr.length > 0) {
      tempArr.push(subArr);
    }
    setResultData(tempArr.reverse());
  } catch (error) {
    alert(error);
  }
};

//below function will change the user's credentials username, email, password
export const changeUserCredentials = async (
  val1: string,
  val2: string,
  textField1: string,
  textField2: string,
  userDetail: any,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any,
  navi: any
) => {
  if (val1 === "Email" && val2 === "User Name") {
    const email = textField1;
    const fullname = textField2;
    if (userDetail.email === email) {
      const changeusername = await axios.post(
        "http://localhost:8080/user/updateusername",
        { email, fullname }
      );
      if (changeusername.status === 200) {
        setOpen(false);
        alert("User Name Changed! Please LogIn again");
        dispatch(setUserData({ userdata: null }));
        navi("/");
      } else {
        alert("something went wrong!!");
      }
    } else {
      alert("Enter valid email!!");
    }
  } else if (val1 === "Email" && val2 === "Password") {
    const email = textField1;
    const password = textField2;
    if (userDetail.email === email) {
      const changeusername = await axios.post(
        "http://localhost:8080/user/updateuserpassword",
        { email, password }
      );
      if (changeusername.status === 200) {
        setOpen(false);
        alert("Password Changed! Please LogIn again");
        dispatch(setUserData({ userdata: null }));
        navi("/");
      } else {
        alert("something went wrong!!");
      }
    } else {
      alert("Enter valid email!!");
    }
  } else if (val1 === "Password" && val2 === "Email") {
    const password = textField1;
    const email = textField2;
    if (userDetail.password === password) {
      const changeusername = await axios.post(
        "http://localhost:8080/user/updateuseremail",
        { password, email }
      );
      if (changeusername.status === 200) {
        setOpen(false);
        alert("Email Changed! Please LogIn again");
        dispatch(setUserData({ userdata: null }));
        navi("/");
      } else {
        alert("something went wrong!!");
      }
    } else {
      alert("Enter vaild password");
    }
  }
};

//below function will start the quiz
export const startQuiz = async (
  quizSubject: string,
  setRandQuestions: React.Dispatch<any>,
  setIsSelected: React.Dispatch<any>,
  setHideButton: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    if (quizSubject !== "select" && quizSubject !== null) {
      const quizQuestion = await axios(
        `http://localhost:8080/user/takeaquiz?subject=${quizSubject}`
      );
      setRandQuestions(quizQuestion.data);
      setIsSelected({});
      setHideButton("");
    } else {
      alert("please select the subject");
    }
  } catch (error) {
    alert(
      "Something went wrong or Not have Enough Questions!! Please try another subject."
    );
  }
};

//admin apis

//below function will help to add new admin by admin only.
export const addNewAdmin = async (
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
  userType: string,
  setFullName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    if (
      fullName.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      confirmPassword.length !== 0 &&
      userType.length !== 0
    ) {
      if (password === confirmPassword) {
        const response = await axios.post(
          "http://localhost:8080/admin/savenewadmin",
          { fullname: fullName, email, password, usertype: userType }
        );
        if (response.status === 200) {
          alert("Account created");
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      } else {
        alert("Password did not matched");
      }
    } else {
      alert("Field should not be empty!!");
    }
  } catch (error) {
    alert(
      "An error occurred during creating new admin. Please try again later."
    );
  }
};

//below function will help to add new question by admin only.
export const addQuestion = async (
  subject: string,
  question: string,
  option1: string,
  option2: string,
  option3: string,
  option4: string,
  correctanswer: string,
  setSubject: React.Dispatch<React.SetStateAction<string>>,
  setQuestion: React.Dispatch<React.SetStateAction<string>>,
  setOption1: React.Dispatch<React.SetStateAction<string>>,
  setOption2: React.Dispatch<React.SetStateAction<string>>,
  setOption3: React.Dispatch<React.SetStateAction<string>>,
  setOption4: React.Dispatch<React.SetStateAction<string>>,
  setCorrectAnswer: React.Dispatch<React.SetStateAction<string>>
) => {
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

//below function helps to change admin's username, email and password.
export const changeAdminCredentials = async (
  val1: string,
  val2: string,
  textField1: string,
  textField2: string,
  userDetail: any,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any,
  navi: any
) => {
  if (val1 === "Email" && val2 === "User Name") {
    const email = textField1;
    const fullname = textField2;
    if (userDetail.email === email) {
      const changeusername = await axios.post(
        "http://localhost:8080/admin/updateusername",
        { email, fullname }
      );
      if (changeusername.status === 200) {
        setOpen(false);
        alert("User Name Changed! Please LogIn again");
        dispatch(setUserData({ userdata: null }));
        navi("/");
      } else {
        alert("something went wrong!!");
      }
    } else {
      alert("Enter valid email!!");
    }
  } else if (val1 === "Email" && val2 === "Password") {
    const email = textField1;
    const password = textField2;
    if (userDetail.email === email) {
      const changeusername = await axios.post(
        "http://localhost:8080/admin/updateuserpassword",
        { email, password }
      );
      if (changeusername.status === 200) {
        setOpen(false);
        alert("Password Changed! Please LogIn again");
        dispatch(setUserData({ userdata: null }));
        navi("/");
      } else {
        alert("something went wrong!!");
      }
    } else {
      alert("Enter valid email!!");
    }
  } else if (val1 === "Password" && val2 === "Email") {
    const password = textField1;
    const email = textField2;
    if (userDetail.password === password) {
      const changeusername = await axios.post(
        "http://localhost:8080/admin/updateuseremail",
        { password, email }
      );
      if (changeusername.status === 200) {
        setOpen(false);
        alert("Email Changed! Please LogIn again");
        dispatch(setUserData({ userdata: null }));
        navi("/");
      } else {
        alert("something went wrong!!");
      }
    } else {
      alert("Enter vaild password");
    }
  }
};

//below function helps get all subject present in the database.
export const allsubs = async (
  setSubs: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const allsubject = await axios.get(
    "http://localhost:8080/admin/getallsubject"
  );
  setSubs((prevSubs: any) => [...prevSubs, ...allsubject.data]);
};

//below function helps to get all questions
export const getAllQuestion = async (
  setQue: React.Dispatch<React.SetStateAction<never[]>>
) => {
  const allQuestion = await axios.get(
    "http://localhost:8080/admin/getallquestions"
  );
  setQue(allQuestion.data);
};

//below function helps to find questions based on the subject.
export const filterQuestion = async (
  quizSubject: string,
  setQue: React.Dispatch<React.SetStateAction<never[]>>
) => {
  if (quizSubject) {
    const filteredQuestion = await axios.get(
      `http://localhost:8080/admin/getallquestions/subject?subject=${quizSubject}`
    );
    setQue(filteredQuestion.data);
    if (quizSubject === "select all") {
      getAllQuestion(setQue);
    }
  }
};

//below function returns all the users.
export const getAllUsers = async (setRows: React.Dispatch<any>) => {
  const users = await axios.get("http://localhost:8080/admin/getallusers");
  setRows(users.data);
};

//below function will return users based on their type(ex. admin/user)
export const filterUser = async (
  userType: string,
  setRows: React.Dispatch<any>
) => {
  if (userType === "admin") {
    const alluser = await axios.get(
      "http://localhost:8080/admin/getallusers/usertype?usertype=admin"
    );
    setRows(alluser.data);
  } else if (userType === "user") {
    const alluser = await axios.get(
      "http://localhost:8080/admin/getallusers/usertype?usertype=user"
    );
    setRows(alluser.data);
  } else if (userType === "select all") {
    getAllUsers(setRows);
  } else {
    alert("Please select the correct value");
  }
};
