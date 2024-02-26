import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// result jab save honga to uske sath ek unique key save hona chahiye backend me taki yaha pe access karna assan ho
const ResultCardComponent =()=> {
  return (
    <div style={{display:"flex", marginLeft:"30px"}}>
        <Card sx={{ maxWidth: 175, margin:"20px", padding:"20px" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                Result
                </Typography>
                <Typography variant="body2">
                {"0"}/5
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}

export default ResultCardComponent;