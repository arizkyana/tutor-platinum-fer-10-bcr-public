import { Container } from 'react-bootstrap';
import ListCars from './ListCars';

function Results() {
  return (
    <Container className="py-3">
      <h1 className="mb-3">Available Cars</h1>
      <ListCars />
    </Container>
  );
}

export default Results;
