// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios';

import {
  setFormValues,
  loginProgress,
  loginSuccess,
  loginFailed,
} from '@/redux/login/slice';

function Login() {
  //   const [formValues, setFormValues] = useState({
  //     email: null,
  //     password: null,
  //   });

  const { formValues } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginProgress());
      const response = await axios.post(
        'https://bootcamp-rent-cars.herokuapp.com/customer/auth/login',
        {
          email: formValues.email,
          password: formValues.password,
        }
      );
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailed());
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
                onChange={(e) => {
                  dispatch(
                    setFormValues({
                      ...formValues,
                      email: e.target.value,
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
                      ...formValues,
                      password: e.target.value,
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
                {formValues.loading ? 'Please wait...' : 'Go to my account'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
