import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

const PopupComponent = ({result,open,setOpen}:{result:number,open:boolean ,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginLeft:'20%'}} >
            Total Score:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 , marginLeft:'40%', fontSize:'20px'}}>
            {`${result}/5`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default PopupComponent;