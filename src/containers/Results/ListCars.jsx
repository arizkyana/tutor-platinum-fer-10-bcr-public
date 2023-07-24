import { Card, Col, Row } from 'react-bootstrap';
import CarItem from './CarItem';

import axios from 'axios';
import { useEffect, useState } from 'react'; // client

function ListCars() {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api-car-rental.binaracademy.org/customer/car'
      );
      setCars(response.data);
      setLoading(false);
    } catch (error) {
      console.log('error > ', error);
      setLoading(false);
    }
  };

  useEffect(function () {
    fetchCars();
  }, []); // mounted

  const renderLoading = () => {
    if (loading) {
      return (
        <>
          <Col lg={4} style={{ height: '27rem' }}>
            <Card style={{ height: '100%', background: 'lightgray' }}>
              Loading
            </Card>
          </Col>
          <Col lg={4} style={{ height: '27rem' }}>
            <Card style={{ height: '100%', background: 'lightgray' }}>
              Loading
            </Card>
          </Col>
          <Col lg={4} style={{ height: '27rem' }}>
            <Card style={{ height: '100%', background: 'lightgray' }}>
              Loading
            </Card>
          </Col>
          <Col lg={4} style={{ height: '27rem' }}>
            <Card style={{ height: '100%', background: 'lightgray' }}>
              Loading
            </Card>
          </Col>
          <Col lg={4} style={{ height: '27rem' }}>
            <Card style={{ height: '100%', background: 'lightgray' }}>
              Loading
            </Card>
          </Col>
          <Col lg={4} style={{ height: '27rem' }}>
            <Card style={{ height: '100%', background: 'lightgray' }}>
              Loading
            </Card>
          </Col>
        </>
      );
    }
    return <></>;
  };

  return (
    <Row className="g-3">
      {renderLoading()}
      {cars &&
        cars.length > 0 &&
        cars.map(function (item) {
          return (
            <CarItem
              key={item.id}
              name={item.name}
              id={item.id}
              image={item.image}
              price={item.price}
            />
          );
        })}
    </Row>
  );
}

export default ListCars;
