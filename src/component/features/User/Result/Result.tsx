import { useEffect, useState } from "react";
import AccordionComponent from "../../../module/AccordionComponent/AccordionComponent";
import { useSelector } from "react-redux";
import { showResult } from "../../../APIs/APIs";

const Result = () => {
  const userDetail = useSelector((state: any) => state.login.userdata);

  const [resultData, setResultData] = useState<any[]>([]);

  useEffect(() => {
    showResult(userDetail, setResultData);
  }, [userDetail.email]);

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
