import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// build a schema
const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // from user collection
    },
    name: {
        type: String,
        required: true,  // must have a value
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema], //follow the structure of the reviewSchema, a document
    rating: {
        type: Number,
        required: true,
        default: 0,
    }, 
    numberReviews: {
        type: Number,
        required: true,
        default: 0,
    }, 
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true, // automatically create fields for when the document was created and updated
});

const Product = mongoose.model('Product', productSchema);

export default Product;