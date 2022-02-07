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

const CompanyJobCard = ({ alljob, job }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        marginTop: "10px",
        marginBottom: "2rem",
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
            {alljob && (
              <Typography component="div" variant="h5">
                {alljob.profile}
              </Typography>
            )}
            {job && (
              <Typography component="div" variant="h5">
                {job.profile}
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Full Time
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Company: Stonks Fintech
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          {job && (
            <Link to={`/jobs/${job._id}`} className="mr-4">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
              >
                View Post
              </Button>
            </Link>
          )}
          {alljob ? (
            <>
              <Link to={`/jobs/${alljob._id}`} className="mr-4">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
                >
                  View Post
                </Button>
              </Link>
              <Link to={`/company/${alljob.userId}`} className="mr-4">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
                >
                  Company Details
                </Button>
              </Link>
            </>
          ) : (
            <Button
              sx={{
                backgroundColor: "#3acbf7",
                marginRight: "10px",
                marginLeft: "4px",
              }}
            >
              {" "}
              View Responses
            </Button>
          )}
        </CardActions>
      </Box>
    </Card>
  );
};

export default CompanyJobCard;