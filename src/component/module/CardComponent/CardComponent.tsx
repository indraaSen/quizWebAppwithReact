import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const CardComponent = ({randQuestions, hideButton,changeRadioValue, isSelected, seeValue}:{randQuestions:any, hideButton:string,changeRadioValue:any, isSelected:any, seeValue:() => void}) => {

  return (     
   <div>
     {
        randQuestions.map((opt:any,index:number) =>
            <Card key = {index} sx={{ maxWidth: 500 , minWidth:500 , border: "1px solid black", marginBottom:'20px'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 , float:'right'}} color="text.secondary" gutterBottom>
                        {index + 1}/5
                    </Typography>
                    <Typography variant="h5" component="div" sx={{paddingBottom: "20px"}}>
                        {opt.question}
                    </Typography>
                    <FormControl>
                        <FormLabel id={`demo-controlled-radio-buttons-group ${index}`}>Options</FormLabel>
                            <RadioGroup
                                aria-labelledby={`demo-controlled-radio-buttons-group ${index}`}
                                name={`controlled-radio-buttons-group ${index}`}
                                value={isSelected[index] || ''}
                                onChange={(e) => changeRadioValue(index, e.target.value)}
                            >
                            {opt.options.map((op:any) => <FormControlLabel sx={{paddingBottom:'10px'}} value={op} name="options" control={<Radio />} label= {op}/>)}
                        
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
       )
     }
     <button className={`${hideButton} border-solid border-2 border-indigo-600 p-2 w-32 rounded-md bg-blue-700 text-white mb-2`} onClick={seeValue}>submit</button>
   </div>
  );
}

export default CardComponent;