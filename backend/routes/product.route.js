import express from 'express';
import {CreateProduct,DeleteProduct,GetAllProduct,UpdateProduct,GetSingleProduct} from '../controllers/product.controller.js'
const router = express.Router();

// Create Product
router.post('/',CreateProduct);

// Delete Product
router.delete('/:id',DeleteProduct)

// Get All Product
router.get('/',GetAllProduct)

// Update Product
router.put('/:id',UpdateProduct)

// Get Single Product
router.get('/:id',GetSingleProduct)

export default router;