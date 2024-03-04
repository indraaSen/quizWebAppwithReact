import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const AccordionComponent = ({ resultData }: { resultData: any }) => {
  return (
    <div>
      <Accordion sx={{ background: "#dbd9db", margin: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Result : {resultData.map((val: any) => val.score)}/5
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead sx={{ background: "#b678c2" }}>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">Subject</TableCell>
                  <TableCell align="center">Question</TableCell>
                  <TableCell align="center">Selected Option</TableCell>
                  <TableCell align="center">Correct Answer</TableCell>
                  <TableCell align="center">Final Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultData.map((val1: any) => (
                  <TableRow
                    key={val1.resultid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {val1.resultid}
                    </TableCell>
                    <TableCell align="center">{val1.subject}</TableCell>
                    <TableCell align="center">{val1.resultquestion}</TableCell>
                    <TableCell align="center">{val1.optionselected}</TableCell>
                    <TableCell align="center">{val1.correctoption}</TableCell>
                    <TableCell align="center">{val1.score}</TableCell>
                    <TableCell align="center">{val1.useremail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
