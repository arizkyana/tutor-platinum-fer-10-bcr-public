import axios from 'axios';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFormValues,
  loginSuccess,
  loginProgress,
  loginFailed,
} from '@/redux/login/slice';
import { useRouter } from 'next/router';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { formValues, loading } = useSelector((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginProgress());
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/customer/auth/login',
        formValues
      );
      dispatch(loginSuccess(response.data));
      router.push('/');
    } catch (error) {
      router.push('/login');
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
                name="email"
                onChange={(e) => {
                  dispatch(
                    setFormValues({
                      ...formValues,
                      email: e.target.value,
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
                      ...formValues,
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
                disabled={loading}
              >
                {loading ? 'Please Wait ...' : 'Go to my account'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
