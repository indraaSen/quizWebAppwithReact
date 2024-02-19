import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react'

function UserTable({heading,rows}:{heading : string[],rows:any}) {
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
               {heading.map((head) =>
                  <TableCell align="center">{head}</TableCell>
               )}
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row:any,index:number) => (
                <TableRow
                  key={row.fullName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" >{index+1}</TableCell>
                  <TableCell align="center">{row.fullName}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.department}</TableCell>
                  <TableCell align="center">{row.userType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default UserTable
