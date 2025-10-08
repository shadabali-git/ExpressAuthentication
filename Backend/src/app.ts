import express from 'express';
import bodyparser from 'body-parser'
import {mongo} from './config/mongo';
import cors from 'cors'
import {PORT} from './config/environment'
import http from 'http'
import { Server } from "socket.io";

// routes
import MasterRoute from './Routes/Master.route'
import AuthGoogleRoute from "./Routes/GoogleOAuth/AuthGoogle.route";
import AuthGoogleCallbackRoute from "./Routes/GoogleOAuth/AuthGoogleCallback.route";


const port = PORT ?? 3000;
const app = express();


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

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: [
            'http://localhost:5173',
            'https://keep.shadab.works',
            'https://express-authentication-henna.vercel.app'
        ],
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // 💡 TIP: You'll put your Tic-Tac-Toe logic here,
    // using socket.on('joinGame', ...), socket.on('makeMove', ...),
    // and io.to(gameId).emit('moveMade', ...)

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});


// routes
app.use("/api/v1", MasterRoute);
app.use("/api/auth/google", AuthGoogleRoute);
app.use("/api/auth/google/callback", AuthGoogleCallbackRoute);


httpServer.listen(port, async () => {
    await mongo();
    console.log(`Server is running on port ${port}`);
});
