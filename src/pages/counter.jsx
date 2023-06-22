import Counter from '@/containers/Counter';
import Head from 'next/head';

function CounterPage() {
  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <Counter />
    </>
  );
}

export default CounterPage;
