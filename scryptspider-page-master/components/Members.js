import Image from 'next/image';
import { team } from '../pages/data/team';

const Members = () => {
  return (
    <div className='row'>
      {team.map((t) => {
        return (
          <div className='members col-lg-4 col-md-6 col-12 '>
            <div className='member-img  '>
              <img
                className='image-member img-fluid'
                src={t.imageUrl}
                // height={386.09}
                // width={314.66}
              />
            </div>
            <div className='member-name text-center'>
              <h3>{t.name}</h3>
              <p className='member-post'>{t.post}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
