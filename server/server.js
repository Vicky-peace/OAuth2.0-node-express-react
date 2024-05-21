import express from "express";
import cors from "cors";
import passport from "passport";
import session from "cookie-session";
import dotenv from 'dotenv';
import authRoute from "./routes/auth.js";


const app = express();

dotenv.config();
app.use(session({
    name: 'session',
    keys: [process.env.SECRET],
    maxAge: 24 * 60 * 60* 100,
}));


app.use(cors({

    origin: "http://localhost:8000",
    methods: "GET, POST,PUT,DELETE",
    credentials: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));

