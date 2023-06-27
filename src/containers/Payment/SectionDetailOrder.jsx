import dayjs from 'dayjs';
import { Card, Col, Row } from 'react-bootstrap';

function SectionDetailOrder(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Order detail</Card.Title>
        <Row>
          <Col>
            <div className="mb-1">Car name</div>
            <div>{props.detailOrder?.Car?.name}</div>
          </Col>
          <Col>
            <div className="mb-1">Category</div>
            <div>{props.detailOrder?.Car?.category}</div>
          </Col>
          <Col>
            <div className="mb-1">Start Rent</div>
            <div>
              {dayjs(props.detailOrder?.start_rent_at).format('DD MMM YYYY')}
            </div>
          </Col>
          <Col>
            <div className="mb-1">Finish Rent</div>
            <div>
              {dayjs(props.detailOrder?.finish_rent_at).format('DD MMM YYYY')}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SectionDetailOrder;
