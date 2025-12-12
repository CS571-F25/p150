import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DestinationCard from '../components/DestinationCard';
import destinations from '../data';

function DestinationsPage() {
  return (
    <div>
      <h1 className="mb-4">Destinations</h1>
      <Row>
        {destinations.map((dest) => (
          <Col key={dest.id} md={4}>
            <DestinationCard destination={dest} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DestinationsPage;