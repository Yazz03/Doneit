import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DoneIt - To-Do List</title>
        <meta name="description" content="Kelola tugas harianmu dengan mudah!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}