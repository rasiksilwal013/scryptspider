import Link from 'next/link';

const latestCase = () => {
  return (
    <div className='m-5 text-center'>
      <h2 className='h1 mb-3'>Our Latest Work</h2>
      <Link href='/work'>
        <a>
          <button className='btn'>our work</button>
        </a>
      </Link>
    </div>
  );
};

export default latestCase;
