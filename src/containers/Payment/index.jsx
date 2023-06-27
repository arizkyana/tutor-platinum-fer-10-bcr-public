import { Button, Container } from 'react-bootstrap';
import SectionDetailOrder from './SectionDetailOrder';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Payment() {
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  const [detailOrder, setDetailOrder] = useState();

  const fetchDetailOrder = async () => {
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/order/${router.query?.orderId}`,
        {
          headers: {
            access_token: user.access_token,
          },
        }
      );
      setDetailOrder(response.data);
    } catch (error) {
      console.log('error > ', error);
    }
  };

  useEffect(() => {
    if (router.query?.orderId) {
      fetchDetailOrder();
    }
  }, [router.query?.orderId]);

  return (
    <Container className="py-4">
      <div className="mb-4">
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <h1>Payment</h1>
      <SectionDetailOrder detailOrder={detailOrder} />
    </Container>
  );
}

export default Payment;
