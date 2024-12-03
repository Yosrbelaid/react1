import React from 'react';
import ProductList from './components/Product'; 
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';


const App = () => {
  const firstName = "Yosr";

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center">Our Products</h1>
          <ProductList />
          <div className="text-center mt-4">
            {firstName ? (
              <>
                <h4>Hello, {firstName}!</h4>
                <img
                  src="https://i.pinimg.com/1200x/e5/22/c7/e522c7fc4e3509112a06368b9093e4b6.jpg" 
                  alt="Profile"
                  className="profile-img"
                />
              </>
            ) : (
              <h4>Hello, there!</h4>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

