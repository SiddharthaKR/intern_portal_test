import MuiAlert from "@material-ui/lab/Alert";
import { Button,Container,Fab,FormControlLabel,FormLabel,makeStyles, MenuItem,Modal,Radio,RadioGroup,Snackbar,TextField,Tooltip, } from "@material-ui/core";
import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';


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
        height: "100vh",
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





const CompanyProfile = () => {
 const location=useLocation();
 const path=location.pathname.split('/')[2];
const [company,setCompany]=useState({})

useEffect(()=>{
const getCompany=async()=>{
    const res=await axios.get('/company/'+path);
    setCompany(res.data);
}
getCompany()
},[path])

const classes = useStyles();
const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return( <div>
    {/* <h1>{company.about}</h1>
    <p>{company.location}</p>
    <p>{company.phone}</p> */}
    <div>
        <Button onClick={() => setOpen(true)}>Post Job</Button>
    <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Company"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Profile"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Duration"
                size="small"
                style={{ width: "100%" }}
              />
            </div>  <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Who Can Apply"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
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
                id="standard-basic"
                label="No of opening"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Perks"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Contact"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() =>{ setOpenAlert(true)
                    setOpen(false)
                }}
              >
                Create
              </Button>
              <Button
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
    
  </div>);
};

export default CompanyProfile;
