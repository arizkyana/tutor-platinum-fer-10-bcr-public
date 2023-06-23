import { Row } from 'react-bootstrap';
import CarItem from './CarItem';

import axios from 'axios';
import { useEffect, useState } from 'react';

function ListCars() {
  const [cars, setCars] = useState([]);
  const fetchCars = async () => {
    try {
      const response = await axios.get(
        'https://api-car-rental.binaracademy.org/customer/car'
      );
      setCars(response.data);
    } catch (error) {
      console.log('error > ', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Row className="g-3">
      {cars &&
        cars.length > 0 &&
        cars.map((item) => (
          <CarItem
            key={item.id}
            name={item.name}
            id={item.id}
            image={item.image}
            price={item.price}
          />
        ))}
    </Row>
  );
}

export default ListCars;
