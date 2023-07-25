import { Alert, Button, Card, Container, Form } from 'react-bootstrap';

import useLogin from './hooks/useLogin';

function Login() {
  const { login, handleSubmit, handleChangeEmail, handleChangePassword } =
    useLogin();

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Card style={{ minWidth: '25rem' }}>
        <Card.Body>
          {login.error?.all && (
            <Alert data-testid="alert-error" variant="danger">
              {login.error.all}
            </Alert>
          )}
          <Card.Title className="mb-4">
            <h3 data-testid="title">Login</h3>
          </Card.Title>

          <Form onSubmit={handleSubmit} data-testid="form-login">
            <div className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                data-testid="input-email"
                type="text"
                id="email"
                name="email"
                onChange={(e) => handleChangeEmail(e.target.value)}
              ></Form.Control>
              {login.error && login.error.email ? (
                <span
                  className="d-block text-danger"
                  data-testid="message-error"
                >
                  {login.error.email}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                data-testid="input-password"
                type="password"
                id="password"
                name="password"
                onChange={(e) => handleChangePassword(e.target.value)}
              />
              {login.error && login.error.password ? (
                <span
                  className="d-block text-danger"
                  data-testid="message-error"
                >
                  {login.error.password}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div>
              <Button
                data-testid="button-login"
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
