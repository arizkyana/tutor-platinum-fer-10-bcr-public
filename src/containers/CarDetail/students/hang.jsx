import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function CarDetail() {
  const [carData, setCarData] = useState({});

  const fetchCarData = async () => {
    try {
      const response = await axios.get(
        'https://api-car-rental.binaracademy.org/customer/car'
      );
      setCarData(response.data);
    } catch (error) {
      console.log('error>', error.message);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [fetchCarData]);

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
          <h3>{carData.nama}</h3>
          <div style={{ width: '100%', height: '18rem' }}>
            <img
              src={carData.urlGambar}
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
