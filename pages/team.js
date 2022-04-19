import React from 'react';
import Members from '../components/Members';
import { createClient } from 'contentful';
import Head from 'next/head';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const teamMember = await client.getEntries({
    content_type: 'teamMember',
    order: 'sys.createdAt',
  });
  return {
    props: {
      teamMember: teamMember.items,
    },
  };
};

const Team = ({ teamMember }) => {
  return (
    <>
      <Head>
        <title>Our Team - Scrypt Spider</title>
        <meta property='og:title' content='Our Team - Scrypt Spider' />
        <meta name='twitter:title' content='Our Team - Scrypt Spider' />
      </Head>
      <div className='team-hero container'>
        <div className='team-header row'>
          <div className='col-12'>
            <div className='team-title text-center '>
              <h1>
                The pint-sized <br />
                powerhouse
              </h1>
            </div>
            <div className='team-subtitle mt-5 m-auto'>
              <p>
                We&apos;ve got a great bunch of people, and an even better team.
                We have an in-house lead in every digital discipline and a
                network of experts around the world. This means we can approach
                any business challenge from any angle. Want to join us?
              </p>
            </div>
          </div>
        </div>
        <div className='members-container '>
          <Members teamMember={teamMember} />
        </div>
      </div>
    </>
  );
};

export default Team;
