import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';


const HomeScreen = () => {
  const [products, setProducts] = useState([]); // we are using useState to set the products to an empty array
   useEffect(() => {
    const fetchProducts = async () => {
      // we are fetching the products from the backend, since we added the proxy in the package.json file, we do not need to add the http://localhost:5001  
      const {data} = await axios.get('/api/products'); 
      setProducts(data); // we are setting the products
    };
    fetchProducts();
  }, []);

  return (
    <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
  );
};

export default HomeScreen;