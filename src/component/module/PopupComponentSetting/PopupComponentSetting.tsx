import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const PopupComponentSetting = ({open,setOpen,fields}:{open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>,fields:any}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {fields.map((val:any)=><TextField sx={{marginBottom:"10px"}} id="outlined-basic" label={val} variant="outlined" onChange={(e)=>console.log(e.target.value)}/>)}
        <Button variant="contained" color="primary" onClick={() => console.log("change hua ")}>Change</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PopupComponentSetting;