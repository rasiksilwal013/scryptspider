import Link from 'next/link';
import Image from 'next/image';

const NewsComponent = () => {
  return (
    <div className='news-container'>
      <div className='all-news'>
        <div className='news-img'>
          <Image
            src='https://blog.hexdigital.com/hubfs/sascha-bosshard-qhhp1LwvPSI-unsplash.jpg'
            width={533}
            height={361.68}
            alt='news-img'
          />
        </div>
        <div className='all-news-title'>
          <p>A start-up business model checklist: </p>
          <p>Keeping the lightbulb lit</p>
        </div>
      </div>
    </div>
  );
};
export default NewsComponent;
