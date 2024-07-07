import express from 'express';
import products from './data/products.js'; // do not forhet to add the .js extension in ES
const port = 5001;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
    });

app.get('/api/products', (req, res) => {
    res.json(products);
}); 

app.get('/api/products/:id' , (req, res) => {
    const product = products.find((p) => p._id === req.params.id); // if the product id matches the id in the url, then we will return that product
    res.json(product);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});