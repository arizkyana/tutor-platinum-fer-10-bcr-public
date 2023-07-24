import { Breadcrumb, Container } from 'react-bootstrap';
import ListCars from './ListCars';
import MyNavbar from '@/components/MyNavbar';

function Results() {
  return (
    <>
      <MyNavbar />
      <Container className="pt-5 pb-3">
        <h1 className="my-3">Available Cars</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <ListCars />
      </Container>
    </>
  );
}

export default Results;
