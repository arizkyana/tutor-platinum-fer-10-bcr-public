import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';

function FormOrder(props) {
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmitOrder = async () => {
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/order',
        {
          start_rent_at: dayjs(startDate).format('YYYY-MM-DD'),
          finish_rent_at: dayjs(endDate).format('YYYY-MM-DD'),
          car_id: props?.car?.id,
        },
        {
          headers: {
            access_token: user.access_token,
          },
        }
      );
      router.push(`/payment/${response.data.id}`);
    } catch (error) {
      console.log('error > ', error);
    }
  };

  return (
    <Card style={{ minHeight: '15rem' }}>
      <Card.Body>
        <Card.Title>Pembayaran</Card.Title>
        <Card.Text>Harga: {props?.car?.price}</Card.Text>

        <div>
          <Card.Title>Tangal Sewa</Card.Title>
          <div>
            <ReactDatePicker
              className={`form-control`}
              selectsRange
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(dates) => {
                setStartDate(dates[0]);
                setEndDate(dates[1]);
              }}
            />
          </div>
        </div>
        {/* <div className="py-3">
          <pre>
            {JSON.stringify(
              {
                start_rent_at: dayjs(startDate).format('YYYY-MM-DD'),
                finish_rent_at: dayjs(endDate).format('YYYY-MM-DD'),
                car_id: props?.car?.id,
              },
              undefined,
              2
            )}
          </pre>
        </div> */}
      </Card.Body>
      <Card.Footer>
        <Button
          type="button"
          variant="success"
          className="d-block"
          style={{ width: '100%' }}
          onClick={() => onSubmitOrder()}
        >
          Bayar
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default FormOrder;
