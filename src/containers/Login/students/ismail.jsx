import axios from 'axios';

import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { setFormValues } from '@/redux/login/slice';

function Login() {
  const login = useSelector((state) => state.login); // state -> formValues
  const dispatch = useDispatch(); // action -> setFormValues

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/auth/login',
        {
          email: login.formValues.email,
          password: login.formValues.password,
        }
      );
      console.log('response > ', response);
    } catch (error) {}
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
                onChange={(e) => {
                  dispatch(
                    setFormValues({
                      email: e.target.value,
                      password: login.formValues.password,
                    })
                  );
                }}
              ></Form.Control>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  dispatch(
                    setFormValues({
                      email: login.formValues.email,
                      password: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="d-block"
                style={{ width: '100%' }}
                variant="success"
              >
                {login.loading ? 'Please wait...' : 'Go to my account'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
