import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Button from "../Responsive/Button";
import Typography from "@mui/material/Typography";
// import Button from '@mui/material/Button';
import logo from "../images/iitglogo.png";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckIcon from '@mui/icons-material/Check';
const ResponseCard = ({ alljob, job }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        marginTop: "10px",
        boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px;",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, margin: "20px" }}
        image={logo}
        alt="logo"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Comder Sharma
              </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              3rd Year
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              B.Tech, Computer Science
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
            <>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
                >
                  View Profile
                </Button>
                <IconButton aria-label="select" sx={{color:'#9EFD38', marginRight: "10px"}}>
                  <CheckIcon sx={{width:'30px',height:'30px'}}/>
                </IconButton>
                <IconButton aria-label="reject" sx={{color:'#FF0000', marginRight: "10px"}}>
                  <CancelOutlinedIcon sx={{width:'30px',height:'30px'}}/>
                </IconButton>
            </>
        </CardActions>
      </Box>
    </Card>
  );
};
export default ResponseCard;
