import { Button, Card, Container, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import {
  loginFailed,
  loginProgress,
  loginSuccess,
  setFormValues,
  setErrorMessage,
} from '@/redux/login/slice';

function Login() {
  const router = useRouter();

  // redux
  const dispatch = useDispatch();
  const { loading, formValues, errorMessage } = useSelector(
    (state) => state.login
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginProgress());
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/auth/login',
        {
          email: formValues.username,
          password: formValues.password,
        }
      );

      if (response.status === 201) {
        dispatch(loginSuccess(response.data));
        router.reload();
      }

      dispatch(loginFailed());
    } catch (error) {
      dispatch(loginFailed());
      dispatch(
        setErrorMessage(
          error.response?.data?.message || 'email dan password salah'
        )
      );
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Card style={{ minWidth: '25rem' }}>
        <Card.Body>
          {errorMessage ? (
            <Alert variant="danger">{errorMessage}</Alert>
          ) : (
            <></>
          )}
          <Card.Title className="mb-4">
            <h3>Login</h3>
          </Card.Title>

          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                id="username"
                onChange={(e) =>
                  dispatch(
                    setFormValues({
                      username: e.target.value,
                      password: formValues.password,
                    })
                  )
                }
              ></Form.Control>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) =>
                  dispatch(
                    setFormValues({
                      username: formValues.username,
                      password: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div>
              <Button
                type="submit"
                className="d-block"
                style={{ width: '100%' }}
                variant="success"
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
