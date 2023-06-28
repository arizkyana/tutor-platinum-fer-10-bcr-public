import { Button, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CarDetail() {
  const [carDetail, setCarDetail] = useState();

  const fetchCarDetail = async () => {
    try {
      const response = await axios.get(
        'https://api-car-rental.binaracademy.org/customer/car/{id}'
      );
      setCars(response.data);
    } catch (error) {
      console.log('error >', error);
    }
  };

  useEffect(() => {
    fetchCarDetail();
  }, []);

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
          <h3>nama mobil</h3>
          <div style={{ width: '100%', height: '18rem' }}>
            <img
              src={'url-gambar-mobil'}
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
