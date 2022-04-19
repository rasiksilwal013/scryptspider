import React from 'react';
import Head from 'next/head';
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
  const category = await client.getEntries({ content_type: 'category' });
  return {
    props: {
      projects: projects.items,
      works: works.items,
      category: category.items,
    },
  };
};

const Work = ({ projects, works, category }) => {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [activeButton, setActiveButton] = React.useState(false);

  const filterProjects = (c) => {
    const data = projects.filter(
      (f) => f.fields.category.fields.title === c.fields.title,
    );
    setFilteredProjects(data);
  };

  const allProjectshandle = () => {
    setFilteredProjects(projects);
  };

  let work = works.map((work) => work.fields);
  return (
    <>
      <Head>
        <title>Our Recent Works - Scrypt Spider</title>
        <meta property='og:title' content='Our Recent Works - Scrypt Spider' />
        <meta name='twitter:title' content='Our Recent Works - Scrypt Spider' />
      </Head>
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
        <div className='filter-btn'>
          <h2 className='mb-4'>Categories</h2>

          <div className='row'>
            <div className='col-12'>
              <div className='filter-btn-wrapper'>
                <input
                  type='radio'
                  id='all'
                  name='category'
                  onChange={allProjectshandle}
                />
                <label className='filter-button' htmlFor='all'>
                  All
                </label>

                {category.map((c) => {
                  return (
                    <div key={c.fields.title}>
                      {/* <input
                        type='radio'
                        id={c.fields.slug}
                        className='filter-button'
                        onClick={() => filterProjects(c)}
                        key={c.fields.slug}
                      />
                      <label for={c.fields.slug}>{c.fields.title}</label> */}

                      <input
                        type='radio'
                        id={c.fields.slug}
                        onChange={() => filterProjects(c)}
                        name='category'
                        id={c.fields.slug}
                      />
                      <label className='filter-button' htmlFor={c.fields.slug}>
                        {c.fields.title}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='work-projects row'>
          <Projects projects={filteredProjects} />
          <Partner work={work} />
        </div>
      </div>
    </>
  );
};

export default Work;
