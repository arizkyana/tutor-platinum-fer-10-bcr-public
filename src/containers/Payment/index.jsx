import { Button, Container } from 'react-bootstrap';

function Payment() {
  return (
    <Container className="py-4">
      <div className="mb-4">
        <Button type="button" variant="secondary">
          Back
        </Button>
      </div>
      <h1>Payment</h1>
    </Container>
  );
}

export default Payment;
