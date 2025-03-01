import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import ProductRouter from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); // allow to handle json 

app.use('/api/product',ProductRouter);

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    return "hi";
})

// Server 
app.listen(PORT,()=>{
    connectDB();
    console.log('Server Started : Link : http://localhost:'+PORT+'/');
})

