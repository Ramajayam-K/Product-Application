import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import ProductRouter from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); // allow to handle json 

app.use('/api/product',ProductRouter);

app.get('/',()=>{
    return "<h1>hi</h1>";
})

// Server 
app.listen(5000,()=>{
    connectDB();
    console.log('Server Started : '+process.env.mongodb_url);
})

