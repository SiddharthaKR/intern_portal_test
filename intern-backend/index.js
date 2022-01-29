const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const passportSetup = require("./config/passport-setup");
const authRoute= require("./routes/auth-route");
const userRoute= require("./routes/user-route");
const mongoose= require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require('dotenv/config');

app.use(cookieSession(
    {
        name: "session",
        keys: ["lama"],
        maxAge: 24 * 60 * 60 * 100
    }
));


app.set('view engine', 'ejs');

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.connect(
    process.env.DB_CONNECTION,()=>{
    console.log("database coonected");
})

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT,DELETE",
    credentials: true,
}))

app.use("/auth",authRoute);
app.use("/api/users", userRoute);

app.listen("5000",()=>{
    console.log("server started on port 5000")
})