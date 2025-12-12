import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homepage from '../assets/homepage.png'; 
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-hero" style={{ backgroundImage: `url(${homepage})` }}>
  <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
    <Row className="text-center w-100">
      <Col>
        <h1 className="display-4 mb-4 text-shadow">Welcome to My Travel Journal</h1>
        <p className="lead mb-4 text-shadow">
          Explore my favorite destinations, see photos, and read my experiences!
        </p>
        <Button as={Link} to="/destinations" variant="light" size="lg">
          View Destinations
        </Button>
      </Col>
    </Row>
  </Container>
</div>
  );
}

export default HomePage;