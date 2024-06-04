import React from 'react'
import Header from './components/header';
import { Container } from "react-bootstrap";

 
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <h1>Welcome to Emmeline's Shop</h1>
        </Container>
      </main>
    </>
   
  );
};

export default App;
