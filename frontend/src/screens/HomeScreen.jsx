// import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';


const HomeScreen = () => {
  // const [products, setProducts] = useState([]); // we are using useState to set the products to an empty array
  //  useEffect(() => {
  //   const fetchProducts = async () => {
  //     // we are fetching the products from the backend, since we added the proxy in the package.json file, we do not need to add the http://localhost:5001  
  //     const {data} = await axios.get('/api/products'); 
  //     setProducts(data); // we are setting the products
  //   };
  //   fetchProducts();
  // }, []);
  const { data: products, isLoading, error } = useGetProductsQuery(); // we are using the useGetProductsQuery hook to get the products from

  return (
    <>
          { isLoading ? (
            <h2>Loading...</h2>
          ) : error ? (<div>{error?.data?.message || error.error}</div>) : 
          
          (<>
                    <h1>Latest Products</h1>
                    <Row>
                      {products.map((product) => ( 
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product} />
                        </Col>
                      ))}
                    </Row>
          </>)}

        </>
  );
};

export default HomeScreen;