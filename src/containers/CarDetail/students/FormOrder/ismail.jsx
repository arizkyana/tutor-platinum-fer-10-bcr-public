import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import axios from 'axios';

import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

function FormOrder(props) {
  const login = useSelector((state) => state.login); //user

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onSubmitOrder = async () => {
    const payload = {
      start_rent_at: dayjs(startDate).format('YYYY-MM-DD'),
      finish_rent_at: dayjs(endDate).format('YYYY-MM-DD'),
      car_id: props.detailCar.id,
    };
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/order',
        payload,
        {
          headers: {
            access_token: login.user.access_token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <Card style={{ minHeight: '15rem' }}>
      <Card.Body>
        <Card.Title>Pembayaran</Card.Title>
        <Card.Text>Harga: {props.detailCar?.price}</Card.Text>

        <div>
          <Card.Title>Tangal Sewa</Card.Title>
          <ReactDatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="form-control"
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button
          type="button"
          variant="success"
          className="d-block"
          style={{ width: '100%' }}
          onClick={onSubmitOrder}
        >
          Order Rental
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default FormOrder;
