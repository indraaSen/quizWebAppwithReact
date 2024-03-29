import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = ({
  heading,
  rows,
  subName,
}: {
  heading: string[];
  rows: any;
  subName: string;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {heading.map((head) => (
              <TableCell align="center" sx={{ background: "#F4F4F4" }}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.subject}</TableCell>
              <TableCell align="center">{row.question}</TableCell>
              <TableCell align="center">{row.option1}</TableCell>
              <TableCell align="center">{row.option2}</TableCell>
              <TableCell align="center">{row.option3}</TableCell>
              <TableCell align="center">{row.option4}</TableCell>
              <TableCell align="center">{row.correctanswer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
