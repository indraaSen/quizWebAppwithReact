import { useEffect, useState } from "react";
import axios from "axios";
import AccordionComponent from "../../../module/AccordionComponent/AccordionComponent";
import { useSelector } from "react-redux";

const Result = () => {
  const userDetail = useSelector((state: any) => state.login.userdata);

  const [resultData, setResultData] = useState<any[]>([]);

  useEffect(() => {
    showResult();
  }, [userDetail.email]);

  const showResult = async () => {
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

  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          textDecoration: "underline",
        }}
      >
        <b>Result</b>
      </div>
      {resultData.map((data) => (
        <AccordionComponent resultData={data} />
      ))}
    </div>
  );
};

export default Result;
