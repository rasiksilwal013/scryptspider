import NewsComponent from '../components/NewsComponent';
import Image from 'next/image';
import Head from 'next/head';

const News = () => {
  return (
    <>
      <Head>
        <title>News - Scrypt Spider</title>
        <meta property='og:title' content='News - Scrypt Spider' />
        <meta name='twitter:title' content='News - Scrypt Spider' />
      </Head>
      <div className='news-hero'>
        <div className='news-title'>
          <h3>News and views</h3>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from scryptspider</h3>
        </div>
        <div className='news-highlight'>
          <div className='img-fluid'>
            <Image
              src='https://blog.hexdigital.com/hubfs/eric-krull-Ejcuhcdfwrs-unsplash%20copy.jpg'
              height={720}
              width={1170}
              alt='news-img'
            />
            <div className='news-highlight-title'>
              <h2>
                Choosing the right digital agency <br />
                partner
              </h2>
            </div>
          </div>
        </div>
        <div className='filter'>
          <div className='filter-title'>
            <h1>Categories</h1>
          </div>
          <div className='filter-button'>
            <button className='btn'>All</button>
            <button className='btn'>Tutorials</button>
            <button className='btn'>General</button>
            <button className='btn'>Features</button>
            <button className='btn'>News</button>
            <button className='btn'>Update</button>
          </div>
        </div>
        <div className='news-list'>
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
        </div>
        <div className='pagination'>
          <h3> &lt; Prev </h3>
          <h3>&nbsp; 1 2 3 &nbsp; </h3>
          <h3> Next &gt; </h3>
        </div>
      </div>
    </>
  );
};

export default News;
