import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-title'>
        <h3>Page cannot</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;be found</h3>
      </div>
      <div className='redirect'>
        <Link href='/'>
          <a>
            <p>BACK TO HOME</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
