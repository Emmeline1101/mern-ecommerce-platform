import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    // throw new Error('Some error');
    const products = await Product.find({});
    res.json(products);
});

// @desc    Fetch single product  
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id); // if the product id matches the id in the url, then we will return that product
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: 'Product not found'});
    }
    res.json(product);
});

export { getProducts, getProductById }; // export the getProducts and getProductById functions