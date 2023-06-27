import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  });

  const handleEmailChange = (e) => {
    setFormValues({
      ...formValues,
      email: e.target.values,
    });
  };

  const handlePasswordChange = (e) => {
    setFormValues({
      ...formValues,
      password: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/admin/auth/login',
        {
          email: formValues.email,
          password: formValues.password,
        }
      );
      console.log('login success');
      console.log(response.data);
    } catch (error) {
      console.log('login failure');
      console.error(error);
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

          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="text"
                id="email"
                onChange={handleEmailChange}
              ></Form.Control>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="d-block"
                style={{ width: '100%' }}
                variant="success"
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
