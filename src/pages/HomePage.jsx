import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row className="text-center">
        <Col>
          <h1 className="display-4 mb-4">Welcome to My Travel Journal</h1>
          <p className="lead mb-4">
            Explore my favorite destinations, see photos, and read my experiences!
          </p>
          <Button as={Link} to="/destinations" variant="primary" size="lg">
            View Destinations
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;