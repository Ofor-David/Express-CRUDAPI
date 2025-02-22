import express from 'express';
import { createProduct,getProductById,getProducts,updateProduct,deleteProduct } from '../controllers/productController.js';

const router = express.Router();

//create prod
router.post('/', createProduct);
//read prod
router.get('/', getProducts);
router.get('/:id', getProductById);
//update prod
router.put('/:id', updateProduct);
//delete prod
router.delete('/:id', deleteProduct);

export default router;