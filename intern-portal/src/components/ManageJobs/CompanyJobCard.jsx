import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '../Responsive/Button';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import logo from '../images/iitglogo.png';
export default function CompanyJobCard() {
  const theme = useTheme();

  return (
        <Card sx={{ display: 'flex',width:'100%',marginTop:'10px' }}>
            <CardMedia
            component="img"
            sx={{ width: 100,height:100,margin:'20px' }}
            image={logo}
            alt="logo"
            />
            <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', width:'100%'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Java Developer
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Full Time
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Company: Stonks Fintech
                </Typography>
                </CardContent>
            </Box>
            <CardActions>
                    <Button variant="contained" sx={{backgroundColor:'#3acbf7', marginRight:'10px'}}>
                        View Post
                    </Button>
                    <Button  sx={{backgroundColor:'#3acbf7', marginRight:'10px'}}> View Responses</Button>
            </CardActions>
            </Box>
        </Card>
  );
}