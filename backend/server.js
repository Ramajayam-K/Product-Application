import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './model/product.modal.js';

dotenv.config();

const app = express();

app.use(express.json()); // allow to handle json 

// Create Product
app.post('/api/product',async(req,res)=>{
    const response=req.body;
    if(!response.name || !response.price || !response.image){
        return res.status(400).json({success:false,message:"Please Fill the name."});
    }
    const NewProduct=new Product(response);
    try{
        await NewProduct.save();
        return res.status(200).json({success:true,message:NewProduct});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({success:false,messgae:'Server Error '+error.message})
    }
});

// Delete Product
app.delete('/api/product/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:'Product deleted successfully.'});
    }catch(error){
        return res.status(400).json({success:false,message:'Product not found.'});
    }
})

// Get All Product
app.get('/api/product',async(req,res)=>{
    try{
        const productData=await Product.find({});
        return res.status(200).json({success:true,data:productData});
    }catch(error){
        return res.status(500).json({success:false,message:'Server Error'});
    }
})

// Update Product
app.put('/api/product/:id',async(req,res)=>{
    const { id } = req.params;
    const productUpdateData=req.body;
    try{
        const UpdatedData=await Product.findByIdAndUpdate(id,productUpdateData,{new:true});
        return res.status(200).json({success:false,message:UpdatedData});
    }catch(error){
        return res.status(500).json({success:false,message:'Server Error'});
    }
})

// Get Single Product
app.get('/api/product/:id',async(req,res)=>{
    const { id } = req.params;
    try{
        const GetSingleProduct=await Product.findById(id);
        return res.status(200).json({success:true,data:GetSingleProduct});
    }catch(error){
        return res.status(500).json({success:false,message:'Server Error'});
    }
})

app.get('/',()=>{
    return "<h1>hi</h1>";
})

// Server 
app.listen(5000,()=>{
    connectDB();
    console.log('Server Started : '+process.env.mongodb_url);
})

