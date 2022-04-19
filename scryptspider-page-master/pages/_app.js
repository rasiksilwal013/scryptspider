import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'swiper/css/bundle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scrypt Spider</title>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
