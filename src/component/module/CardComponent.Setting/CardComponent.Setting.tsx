import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import PopupComponentSetting from '../PopupComponentSetting/PopupComponentSetting';


const Style = {
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

const CardComponentSetting = ({
    textName,
    openPopup,
    open,
    setOpen,
    setTextField1,
    setTextField2,
    textvalue,
    changeData
  }:
  {textName:string,
    openPopup: (buttonName:string)=>void,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    setTextField1:React.Dispatch<React.SetStateAction<string>>,
    setTextField2:React.Dispatch<React.SetStateAction<string>>,
    textvalue:any,
    changeData:(val1:string, val2:string)=>void
  }) => {
  return (
    <>
      <Card sx={{ background:"#F4F4F4", minWidth:" 100%", marginTop:"10px", height:"60px"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h5" component="div" sx={{fontSize:"18px"}}>
            {textName}
          </Typography>
          <Button variant='outlined' color='primary' onClick={(key)=>openPopup(textName)}>change {textName}</Button>
        </CardContent>
      </Card>
    
      <PopupComponentSetting open={open} setOpen={setOpen} setTextField1={setTextField1} setTextField2={setTextField2} textvalue={textvalue} changeData={changeData} />
    </>
  );
}

export default CardComponentSetting;