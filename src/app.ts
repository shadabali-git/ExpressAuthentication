import express from 'express';
import bodyparser from 'body-parser'
import {PORT} from './config/environment';
import {mongo} from './config/mongo';

const app = express();
const port = PORT ?? 3000;

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));


import MasterRoute from './Routes/Master.route'
app.use("/api",MasterRoute);



app.listen(port, async () => {

    await mongo();

    console.log(`Server is running on port ${port}`);
});
