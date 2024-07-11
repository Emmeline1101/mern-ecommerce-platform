import express from 'express';
// import products from '../data/products.js'; // do not forhet to add the .js extension in ES
const router = express.Router(); // create a router object
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';


router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products);
})); 

router.get('/:id' , asyncHandler(async(req, res) => {
    // const product = products.find((p) => p._id === req.params.id); // if the product id matches the id in the url, then we will return that product
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: 'Product not found'});
    }
    res.json(product);
}));

export default router; // export the router object