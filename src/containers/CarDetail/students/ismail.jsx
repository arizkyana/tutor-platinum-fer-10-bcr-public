import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import FormOrder from './FormOrder';

function CarDetail() {
  const router = useRouter();

  const [detailCar, setDetailCar] = useState();

  const fetchCarDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/car/${id}`
      );
      setDetailCar(response.data);
    } catch (error) {
      console.log('error > ', error);
    }
  };

  useEffect(() => {
    if (router.query.carId) {
      fetchCarDetail(router.query.carId);
    }
  }, [router.query.carId]);

  return (
    <Container className="py-4">
      <div className="mb-4">
        <Button type="button" variant="secondary">
          Back
        </Button>
      </div>
      <h1 className="mb-3">Detail</h1>
      {detailCar ? (
        <Row className="g-3">
          <Col>
            <h3>{detailCar.name}</h3>
            <div style={{ width: '100%', height: '18rem' }}>
              <img
                src={detailCar.image}
                alt="mobil"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </Col>
          <Col lg={4}>
            <FormOrder detailCar={detailCar} />
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default CarDetail;
