import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

function Login() {
  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  });

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://bootcamp-rent-cars.herokuapp.com/customer/auth/login',
        formValues
      );
      alert('Login Sukses');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Card style={{ minWidth: '25rem' }}>
        <Card.Body>
          <Card.Title className="mb-4">
            <h3>Login</h3>
          </Card.Title>

          <Form>
            <div className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="text"
                id="email"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  });
                }}
              ></Form.Control>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" id="password" name="password" />
            </div>
            <div>
              <Button
                type="submit"
                className="d-block"
                style={{ width: '100%' }}
                variant="success"
              >
                Go to my account
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
