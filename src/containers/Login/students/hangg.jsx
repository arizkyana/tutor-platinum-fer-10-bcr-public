import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';
import { login, setFormValues } from '../../redux/login/slice.js';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setFormValues(formValues));
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/auth/login',
        formValues
      );
      console.log('loginSucces');
      router.push('/');
      router.push('/');
    } catch (error) {
      console.error('loginFailure', error);
    } finally {
      dispatch(setLoading(false));
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
            <div className="mb-3" onSubmit={handleSubmit}>
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
              <Form.Control
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  dispatch(setFormValues({
                    ...formValues,
                    password: e.target.value,
                  });)
                }}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="d-block"
                style={{ width: '100%' }}
                variant="success"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Go to my account'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
