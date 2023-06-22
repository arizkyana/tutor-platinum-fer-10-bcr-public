import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Container className="pt-4">
      <div>
        <h1 className="mb-3">Counter</h1>
        <div className="d-flex justify-content-start align-items-center">
          <Button
            type="button"
            variant="danger"
            onClick={() => setCount(count - 1)}
            data-testid="btn-decrement"
          >
            -
          </Button>
          <div
            className="text-center"
            style={{ minWidth: '5rem' }}
            data-testid="result-counter"
          >
            {count}
          </div>
          <Button
            type="button"
            onClick={() => setCount(count + 1)}
            data-testid="btn-increment"
          >
            +
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Counter;
