import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-title'>
        <h1>
          Page cannot <br />
          be found
        </h1>
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
