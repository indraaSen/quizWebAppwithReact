import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:"flex",
  flexDirection:"column"
};

const PopupComponentSetting = ({open,setOpen,setTextField1,setTextField2,textvalue,changeData}:{open:boolean,setOpen: React.Dispatch<React.SetStateAction<boolean>>,setTextField1:React.Dispatch<React.SetStateAction<string>>,setTextField2:React.Dispatch<React.SetStateAction<string>>,textvalue:any,changeData:(val1:string, val2:string)=>void}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField sx={{marginBottom:"10px"}} id="outlined-basic" type={textvalue[0] === 'Password' ? 'password':'text'} label={textvalue[0]} variant="outlined" onChange={(e)=> setTextField1(e.target.value)}/>
        <TextField sx={{marginBottom:"10px"}} id="outlined-basic" type={textvalue[1] === 'Password' ? 'password':'text'} label={textvalue[1]} variant="outlined" onChange={(e)=> setTextField2(e.target.value)}/>
        <Button variant="contained" color="primary" onClick={() => changeData(textvalue[0],textvalue[1]) }>Change</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PopupComponentSetting;