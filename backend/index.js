import express from 'express';

import dotenv from "dotenv";
import connectDB from './config/db.js';
import router from './routes/userRoute.js';
import cors from 'cors'



const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/auth', router)

app.listen(PORT, async ()=> {
    console.log(`Server running on port : ${PORT}`);
    await connectDB();
})