import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const CardComponentSetting = ({val, index,changeData}:{index:number,val:string,changeData: (something:any)=>void}) => {
  return (
    <Card sx={{ minWidth:" 100%", marginTop:"10px"}}>
      <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="h5" component="div">
          {val}
        </Typography>
        <Button variant='outlined' color='primary' key={index} onClick={(e)=>changeData(index)}>change</Button>
       </CardContent>
    </Card>
  );
}

export default CardComponentSetting;