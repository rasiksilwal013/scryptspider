import Partner from '../../components/Partner';

// importing from next
import { createClient } from 'contentful';
import Projects from '../../components/Projects/Projects';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const projects = await client.getEntries({ content_type: 'projects' });
  const works = await client.getEntries({ content_type: 'works' });
  return {
    props: {
      projects: projects.items,
      works: works.items,
    },
  };
};

const Work = ({ projects, works }) => {
  let work = works.map((work) => work.fields);
  return (
    <div className='work-hero container '>
      <div className='work-title row text-center '>
        <h1>
          Our latest <br />
          and greatest
        </h1>
        <div className='work-subtitle  row'>
          <p>A selection of some of our latest work</p>
          <p>&nbsp;&nbsp; across all sectors and disciplines</p>
        </div>
      </div>
      <div className='work-projects row'>
        <Projects projects={projects} />
        <Partner work={work} />
      </div>
    </div>
  );
};

export default Work;
