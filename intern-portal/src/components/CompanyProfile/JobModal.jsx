import MuiAlert from "@material-ui/lab/Alert";
import { Button,Container,Fab,FormControlLabel,FormLabel,makeStyles, MenuItem,Modal,Radio,RadioGroup,Snackbar,TextField,Tooltip, } from "@material-ui/core";
import React, { useContext, useRef } from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { CompanyContext } from "../../context/CompanyContext";




const useStyles = makeStyles((theme) => ({

 
    
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "110vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(1),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}





const JobModal = ({child}) => {
 



  const [company,setCompany]=useContext(CompanyContext);

  const classes = useStyles();
const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };


  const[text,setText]=useState({company:'',
  profile:'',
  duration:'',
  whocanapply:'',
  aboutjob:'',
  noofopening:'',
  perks:'',
  phone:''
})
const handleInput=(e)=>{
  const name= e.target.name;
  const value=e.target.value;

  setText({...text, [name]:value})
}




const submitHandler=async()=>{

const newJob={
  userId:company.userId,
  compId:company._id,
  company:text.company,
  profile:text.profile,
  duration:text.duration,
  whocanapply:text.whocanapply,
  aboutjob:text.aboutjob,
  noofopening:text.noofopening,
  perks:text.perks,
  phone:text.phone
}

try{
await axios.post("/jobs",newJob);
console.log("JOB POSTED");
window.location.reload();
console.log(newJob)
}catch(err){
console.log(err);
}
}

  return (
    <div>
       <Button  variant="outlined" color="#03a9f4" onClick={() => setOpen(true)} sx={{backgroundColor:'#3acbf7', marginRight:'10px',marginBottom:'20px'}}>
                        {child}
                    </Button>
    
<Modal style={{overflow:'scroll'}} open={open}>
    <Container className={classes.container}>
      <form action="/jobs" method="POST"  style={{marginTop:'0.5rem'}}  className={classes.form} autoComplete="on">
        <div className={classes.item}>
          <TextField
          name='company'
          value={text.company}
          onChange={handleInput}
            id="standard-basic"
            label="Company"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name='profile'
          value={text.profile}
          onChange={handleInput}
            id="standard-basic"
            label="Profile"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="duration"
          value={text.duration}
          onChange={handleInput}
            id="standard-basic"
            label="Duration"
            size="small"
            style={{ width: "100%" }}
          />
        </div>  <div className={classes.item}>
          <TextField
          name="whocanapply"
          value={text.whocanapply}
          onChange={handleInput}
            id="standard-basic"
            label="Who Can Apply"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="aboutjob"
          value={text.aboutjob}
          onChange={handleInput}
            id="outlined-multiline-static"
            multiline
            rows={2}
            variant="outlined"
            label="About Job"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="noofopening"
          value={text.noofopening}
        onChange={handleInput}
            id="standard-basic"
            label="No of opening"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="perks"
          value={text.perks}
          onChange={handleInput}
            id="standard-basic"
            label="Perks"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="phone"
          value={text.phone}
          onChange={handleInput}
            id="standard-basic"
            label="Contact"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <Button
          type="submit"
            variant="outlined"
            color="primary"
            style={{ marginRight: 20 }}
            onClick={()=>{setOpenAlert(true)
              setOpen(false)
              submitHandler()
            }}
          >
            Post Job
          </Button>
          <Button
           type="button"
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  </Modal>
  <Snackbar
    open={openAlert}
    autoHideDuration={4000}
    onClose={handleClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  >
    <Alert onClose={handleClose} severity="success">
      This is a success message!
    </Alert>
  </Snackbar>
</div>
  );
};

export default JobModal;
