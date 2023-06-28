import { Card, Col, Row } from 'react-bootstrap';

function SectionDetailOrder() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Order detail</Card.Title>
        <Row>
          <Col>
            <div className="mb-1">Car name</div>
          </Col>
          <Col>
            <div className="mb-1">Category</div>
          </Col>
          <Col>
            <div className="mb-1">Start Rent</div>
          </Col>
          <Col>
            <div className="mb-1">Finish Rent</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SectionDetailOrder;
