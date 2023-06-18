import { Button, Card, Form } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Button type="button" data-testid="button">
        Contoh Button Bootstrap
      </Button>
      <Button type="button" variant="danger">
        Contoh Button Bootstrap
      </Button>
      <Button type="button" variant="success">
        Contoh Button Bootstrap
      </Button>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {`Some quick example text to build on the card title and make up the
            bulk of the card's content.`}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default HomePage;
