// importing components
import Logo from '../components/Logo';
import About from '../components/About';
import Projects from '../components/Projects/Projects';
import Partner from '../components/Partner';
import Contact from '../components/Contact';
import _ from 'lodash';

// importing from contentful
import { createClient } from 'contentful';
import LatestCase from '../components/LatestCase';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const projects = await client.getEntries({
    content_type: 'projects',
    order: '-sys.createdAt',
  });
  const page = await client.getEntries({ content_type: 'page' });
  const works = await client.getEntries({ content_type: 'works' });

  return {
    props: {
      projects: projects.items,
      page: page.items,
      works: works.items,
    },
  };
};

export default function Home({ projects, page, works }) {
  let work = works.map((work) => work.fields);
  let about = page.map((p) => p.fields.blocks[0].fields.description);

  return (
    <>
      <div className='main'>
        <Logo />
        <About about={about} />
        <LatestCase />
        <Projects projects={_.filter(projects, 'fields.featured').reverse()} />
        <Partner work={work} />
        <Contact />
      </div>
    </>
  );
}
