import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DestinationCard from '../components/DestinationCard';
import destinations from '../data';

function DestinationsPage() {
  return (
    <Container fluid className="py-4">
      <h1 className="mb-4 text-center">Destinations</h1>
      <Row className="g-4">
        {destinations.map(dest => (
          <Col key={dest.id} xs={12} sm={6} md={4}>
            <DestinationCard destination={dest} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DestinationsPage;