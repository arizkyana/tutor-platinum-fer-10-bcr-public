import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';

function FormOrder(props) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onSubmitOrder = async () => {
    try {
      const payload = {
        start_rent_at: startDate,
        finish_rent_at: endDate,
        car_id: props.detailCar.id,
      };try {
        const response = await axios.get(
          `https://api-car-rental.binaracademy.org/customer/car/${id}`
        );
    } catch (error) {
        console.log('error',error)
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
        >
          Order Rental
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default FormOrder;
