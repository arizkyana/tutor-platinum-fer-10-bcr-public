import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;

  const [detailCar, setDetailCar] = useState();
  const fetchCarDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/car/${id}`
      );
      setDetailCar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (carId) {
      fetchCarDetail(carId);
    }
  }, [carId]);

  return (
    <Container className="py-4">
      <div className="mb-4">
        <Button type="button" variant="secondary">
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
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
}

export default CarDetail;
