import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import {
  useFormValues,
  loginProgress,
  loginSuccess,
  loginFailed,
} from '@/redux/login/slice';

function Login() {
  const login = useSelector((state) => state.login);
  const navigate = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(login());
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/auth/login',
        {
          email: login.formValues.email,
          password: login.formValues.password,
        }
      );
      console.log(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  });

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Card style={{ minWidth: '25rem' }}>
        <Card.Body>
          <Card.Title className="mb-4">
            <h3>Login- YUSRIL</h3>
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
                value={formValues.email ?? ''}
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
                      password: e.target.value,
                      email: login.formValues.email,
                    })
                  );
                }}
                value={formValues.password ?? ''}
              />
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
