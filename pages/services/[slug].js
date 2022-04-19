import { createClient } from 'contentful';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'services',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'services',
    'fields.slug': params.slug,
    // 'fields.category.sys.contentType.sys.id': 'category',
    // 'fields.category.fields.slug[all]': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { services: items[0] },
    revalidate: 1,
  };
};

const Details = ({ services }) => {
  if (!services) return <div>not found</div>;
  const markdown = services.fields.description.toString();
  return (
    <>
      <Head>
        <title>{`${services.fields.title.toUpperCase()} - Scrypt Spider`}</title>
        <meta
          property='og:title'
          content={`${services.fields.title.toUpperCase()} - Scrypt Spider`}
        />
        <meta
          name='twitter:title'
          content={`${services.fields.title.toUpperCase()} - Scrypt Spider`}
        />
      </Head>
      <div
        className='title-container'
        style={{
          background: `linear-gradient(3deg, rgb(27, 27, 27) 0%, rgba(255, 255, 255, 0) 100%), url("${services.fields.image.fields.file.url}?w=1920")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='row'>
          <div className='col-12 project-title'>
            <h1>{services.fields.title}</h1>
          </div>
        </div>
      </div>
      <div className='details container'>
        <div className='row'>
          <div className='col-12 content py-5'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
