import Link from 'next/link';
import Image from 'next/image';

const NewsComponent = () => {
  return (
    <div className='news-container'>
      <Link href='/work/1'>
        <div className='all-news'>
          <div className='news-img'>
            <Image
              src='https://blog.hexdigital.com/hubfs/sascha-bosshard-qhhp1LwvPSI-unsplash.jpg'
              width={533}
              height={361.68}
            />
          </div>
          <div className='all-news-title'>
            <p>A start-up business model checklist: </p>
            <p>Keeping the lightbulb lit</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default NewsComponent;
