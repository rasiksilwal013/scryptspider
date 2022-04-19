import React from 'react';
import Members from '../components/Members';

const Team = () => {
  return (
    <div className='team-hero container'>
      <div className='team-header row'>
        <div class='col-12'>
          <div className='team-title text-center '>
            <h1>
              The pint-sized <br />
              powerhouse
            </h1>
          </div>
          <div className='team-subtitle mt-5 m-auto'>
            <p>
              We've got a great bunch of people, and an even better team. We
              have an in-house lead in every digital discipline and a network of
              experts around the world. This means we can approach any business
              challenge from any angle. Want to join us?
            </p>
          </div>
        </div>
      </div>
      <div className='members-container '>
        <Members />
      </div>
    </div>
  );
};

export default Team;
