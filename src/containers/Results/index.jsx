import { Container } from 'react-bootstrap';
import ListCars from './ListCars';
import MyNavbar from '@/components/MyNavbar';

function Results() {
  return (
    <>
      <MyNavbar />
      <Container className="pt-5 pb-3">
        <h1 className="my-3">Available Cars</h1>
        <ListCars />
      </Container>
    </>
  );
}

export default Results;
