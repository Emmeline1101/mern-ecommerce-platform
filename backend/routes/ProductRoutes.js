import express from 'express';
// import products from '../data/products.js'; // do not forget to add the .js extension in ES
const router = express.Router(); // create a router object
import { getProducts, getProductById } from '../controllers/productController.js';



router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router; // export the router object