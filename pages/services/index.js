import Link from 'next/link';
import { createClient } from 'contentful';
import Head from 'next/head';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const services = await client.getEntries({ content_type: 'services' });
  return {
    props: {
      services: services.items,
    },
  };
};

const services = ({ services }) => {
  return (
    <>
      <Head>
        <title>Our Services - Scrypt Spider</title>
        <meta property='og:title' content='Our Services - Scrypt Spider' />
        <meta name='twitter:title' content='Our Services - Scrypt Spider' />
      </Head>
      <div className='container   '>
        <div className='row p-5 text-center'>
          <h1>Our Services</h1>
        </div>
        <div className='row'>
          {services.map((s) => {
            return (
              <div
                className=' col-md-6 col-12 mb-sm-5 mb-4 services-container '
                key={s.fields.slug}
              >
                <Link href={`/services/${s.fields.slug}`}>
                  <a className='services-link'>
                    <div>
                      <img
                        className='img-fluid '
                        src={`https:${s.fields.image.fields.file.url}?w=720`}
                      />
                      <h4 className='mt-3'>{s.fields.title}</h4>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default services;
