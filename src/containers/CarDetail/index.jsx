import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function CarDetail() {
  const router = useRouter();
  const [detailCar, setDetailCar] = useState();

  const fetchDetailCard = async () => {
    const carId = router.query.carId;
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/car/${carId}`
      );
      setDetailCar(response.data);
    } catch (error) {
      console.log('error > ', error);
    }
  };

  useEffect(() => {
    if (router.query?.carId) {
      fetchDetailCard();
    }
  }, [router.query?.carId]);

  return (
    <Container className="py-4">
      <div className="mb-4">
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <h1 className="mb-3">Detail</h1>
      <Row className="g-3">
        <Col>
          <h3>{detailCar?.name}</h3>
          <div style={{ width: '100%', height: '18rem' }}>
            <img
              src={detailCar?.image}
              alt="mobil"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </Col>
        <Col lg={4}>
          <Card style={{ minHeight: '15rem' }}>
            <Card.Body>
              <Card.Title>Pembayaran</Card.Title>
              <Card.Text>Harga: {detailCar?.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                type="button"
                variant="success"
                className="d-block"
                style={{ width: '100%' }}
              >
                Bayar
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetail;
