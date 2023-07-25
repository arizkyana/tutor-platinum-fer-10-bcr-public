import { Card } from 'react-bootstrap';
import Head from 'next/head';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} key="title" />
        <meta name="description" content={props.description}></meta>
      </Head>
      <main>
        <Card>
          <Card.Header>
            <Card.Title>Nama mobil</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>deskripsi</p>
          </Card.Body>
          <Card.Footer>ini footer</Card.Footer>
        </Card>
        <h1 style={{ fontSize: '100pt' }}>Judul website</h1>
        <section>
          <h2 data-testid="button" style={{ fontSize: '100pt' }}>
            Judul website
          </h2>
          <p style={{ fontSize: '20pt' }}>
            Isi website Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dignissimos possimus commodi architecto, asperiores cum
            impedit in deserunt corporis amet ut voluptatem consectetur harum ad
            repudiandae dolores eveniet soluta doloremque excepturi?
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: '100pt' }}>Judul website</h2>
          <p style={{ fontSize: '20pt' }}>
            Isi website Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dignissimos possimus commodi architecto, asperiores cum
            impedit in deserunt corporis amet ut voluptatem consectetur harum ad
            repudiandae dolores eveniet soluta doloremque excepturi?
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: '100pt' }}>Judul website</h2>
          <p style={{ fontSize: '20pt' }}>
            Isi website Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dignissimos possimus commodi architecto, asperiores cum
            impedit in deserunt corporis amet ut voluptatem consectetur harum ad
            repudiandae dolores eveniet soluta doloremque excepturi?
          </p>
        </section>
      </main>
    </>
  );
}

export function getServerSideProps() {
  // hit api
  return {
    props: {
      title: 'Binar Car Rental - Home - Update',
      description: 'Platfrom rental mobil no.1 di Indonesia',
    },
  };
}

export default HomePage;
