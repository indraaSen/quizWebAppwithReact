import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const CardComponent = () => {

    const [isSelected,setIsSelected] = React.useState<any>({});

    const options = [
        {question : 'this is question number 1'},
        {question : 'this is question number 2'},
        {question : 'this is question number 3'},
        {question : 'this is question number 4'},
        {question : 'this is question number 5'}    
    ]

    const optionhai = [ "ans ONE is the mai kyu batau is the hota hai darde disko is the...heeh..carry on","ans TWO is the mai kyu batau is the hota hai darde disko is the...heeh..carry on",
        "ans THREE is the mai kyu batau is the hota hai darde disko is the...heeh..carry on","ans FOUR is the mai kyu batau is the hota hai darde disko is the...heeh..carry on",
        "ans FIVE is the mai kyu batau is the hota hai darde disko is the...heeh..carry on"
    ]

    const changeRadioValue = (index:number, val:string) =>{
        console.log('index', index+1);
        console.log('val',val);
        if (index < 5) {
            setIsSelected({ ...isSelected, [index]: val });
        }
    }

    const seeValue = () =>{
        console.log('Selected Values:');
        Object.keys(isSelected).forEach(index => {
            console.log(`Question ${parseInt(index) + 1}: ${isSelected[index]}`);
        });
    }


  return (     
   <div>
     {
        options.map((opt,index) =>

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
                            {optionhai.map((op) => <FormControlLabel sx={{paddingBottom:'10px'}} value={op} name="options" control={<Radio />} label= {op}/>)}
                        
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
                
        )
     }
    <button onClick={seeValue}>submit</button>
   </div>
  );
}

export default CardComponent;