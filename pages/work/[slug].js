import { createClient } from 'contentful';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'projects',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'projects',
    'fields.slug': params.slug,
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
    props: { projects: items[0] },
    revalidate: 1,
  };
};

const Details = ({ projects }) => {
  if (!projects) return <div>not found</div>;
  const markdown = projects.fields.body.toString();
  return (
    <>
      <Head>
        <title>{`${projects.fields.title} - Scrypt Spider`}</title>
        <meta name='description' content={projects.fields.description} />
        <meta name='author' content='Scrypt Spider' />
        <meta
          property='og:title'
          content={`${projects.fields.title} - Scrypt Spider`}
        />
        <meta property='og:url' content='https://www.scryptspider.com' />
        <meta property='og:type' content='Website' />
        <meta
          property='og:image'
          content={`https:${projects.fields.hero.fields.file.url}?w=1280`}
        />
        <meta property='og:description' content={projects.fields.description} />
        <meta property='og:site_name' content='Scrypt Spider' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={`${projects.fields.title} - Scrypt Spider`}
        />
        <meta
          name='twitter:description'
          content={projects.fields.description}
        />
        <meta
          name='twitter:image'
          content={`https:${projects.fields.hero.fields.file.url}?w=1280`}
        />
      </Head>
      <div
        className='title-container'
        style={{
          background: `linear-gradient(3deg, rgb(27, 27, 27) 0%, rgba(255, 255, 255, 0) 100%), url("${projects.fields.hero.fields.file.url}?w=1920")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='row'>
          <div className='col-12 project-title'>
            <h1>{projects.fields.title}</h1>
            <p>
              <span
                className='text-uppercase mb-3 d-block'
                style={{ fontWeight: 'bold' }}
              >
                {projects.fields.category.fields.title}
              </span>
              Year&nbsp;&nbsp;
              <b>{projects.fields.year}</b>
            </p>
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
