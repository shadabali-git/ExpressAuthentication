import express from 'express';
import bodyparser from 'body-parser'
import {mongo} from './config/mongo';
import passport from "passport";
import cors from 'cors'
import {PORT} from './config/environment'
import './config/passport';

// routes
import MasterRoute from './Routes/Master.route'
import AuthGoogleRoute from "./Routes/GoogleOAuth/AuthGoogle.route";
import AuthGoogleCallbackRoute from "./Routes/GoogleOAuth/AuthGoogleCallback.route";


const port = PORT ?? 3000;
const app = express();

// middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyparser.urlencoded({extended: true}));
app.use(passport.initialize());

// routes
app.use("/api", MasterRoute);
app.use('/auth/google', AuthGoogleRoute);
app.use('/auth/google/callback', AuthGoogleCallbackRoute);


app.listen(port, async () => {
    await mongo();
    console.log(`Server is running on port ${port}`);
});
