import { Col, Card, Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';
import Link from 'next/link';

function CarItem({ id, name, price, image }) {
  // const router = useRouter();
  return (
    <Col lg={4}>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div style={{ width: '100%', height: '18rem' }}>
            <img
              src={image}
              alt="mobil"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <p>{price}</p>

          <Link href={`/detail/${id}`}>
            <Button
              type="button"
              variant="success"
              className="d-block"
              style={{ width: '100%' }}
            >
              Pilih Mobil
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CarItem;
