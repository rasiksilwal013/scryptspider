import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'swiper/css/bundle';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
        <link rel='icon' href='/logo.png'></link>
        <meta
          name='description'
          content='Developing innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design, web development, business-to-client applications are a few that we offer.'
        />
        <meta
          name='google-site-verification'
          content='CN4Dxv2ENXx17k14c4HTu3quWb3n9SYbydaFqu6IsO0'
        />
        <meta name='author' content='Scrypt Spider' />
        <meta property='og:title' content='Scrypt Spider' />
        <meta property='og:url' content='https://www.scryptspider.com' />
        <meta property='og:type' content='Website' />
        {router.pathname != '/work/[slug]' ? (
          <>
            <meta
              property='og:image'
              content='https://www.scryptspider.com/bg-spider.jpg'
            />
            <meta
              name='twitter:image'
              content='https://www.scryptspider.com/bg-spider.jpg'
            />
          </>
        ) : (
          ''
        )}
        <meta
          property='og:description'
          content='Developing innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design, web development, business-to-client applications are a few that we offer.'
        />
        <meta property='og:site_name' content='Scrypt Spider' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Scrypt Spider' />
        <meta
          name='twitter:description'
          content='Developing innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design, web development, business-to-client applications are a few that we offer.'
        />
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-WX9KHMS5T4`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

          gtag('config', 'G-WX9KHMS5T4')
          `,
          }}
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
