import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{display:'flex',justifyContent:'evenly'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login() {
  const [value, setValue] = React.useState(0);
  const outlook=()=>{
    window.open("http://localhost:5000/auth/outlook", "_self")
  }
  const google=()=>{
    window.open("http://localhost:5000/auth/google", "_self")
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'10vh'}}>
    <Box sx={{ width: '60%',height:'50vh',boxShadow:'gray 1px 1px 4px 1px',borderRadius:'20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{display:'flex',justifyContent:'evenly'}} centered>
          <Tab label="For Students" {...a11yProps(0)} sx={{width:'50%'}}/>
          <Tab label="For Company" {...a11yProps(1)} sx={{width:'50%'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <div style={{display:'flex',flexDirection:'column',alignItems:'center', width:'inherit'}}>
         <div style={{fontSize:'20px',marginRight:'0 auto'}}>Please login to continue</div>
         <div>
        <Button variant="contained" sx={{backgroundColor:'#3acbf7', marginRight:'10px',marginBottom:'20px'}}>
            Login Via Outlook
          </Button>
          </div>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center', width:'inherit'}}>
         <div style={{fontSize:'20px',marginRight:'0 auto'}}>Please login to continue</div>
         <div>
        <Button variant="contained" sx={{backgroundColor:'#DB4437', marginRight:'10px',marginBottom:'20px'}}>
            Login Via Gmail
          </Button>
          </div>
       </div>
      </TabPanel>
    </Box>
    </div>
  );
}

