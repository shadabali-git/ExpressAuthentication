import express from 'express';
import bodyparser from 'body-parser'
import {mongo} from './config/mongo';
import cors from 'cors'
import {PORT} from './config/environment'

// routes
import MasterRoute from './Routes/Master.route'
import AuthGoogleRoute from "./Routes/GoogleOAuth/AuthGoogle.route";
import AuthGoogleCallbackRoute from "./Routes/GoogleOAuth/AuthGoogleCallback.route";


const port = PORT ?? 3000;
const app = express();
// app.set('trust proxy', tru e);

// middleware
app.use(express.json())
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://keep.shadab.works',
        'https://express-authentication-henna.vercel.app'
    ],
    credentials: true
}));
app.use(bodyparser.urlencoded({extended: true}));

// routes
app.use("/api", MasterRoute);
app.use("/api/auth/google", AuthGoogleRoute);
app.use("/api/auth/google/callback", AuthGoogleCallbackRoute);


app.listen(port, async () => {
    await mongo();
    console.log(`Server is running on port ${port}`);
});
