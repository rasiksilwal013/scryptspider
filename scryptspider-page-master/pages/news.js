import NewsComponent from '../components/NewsComponent';
import Image from 'next/image';
import Button from '../components/Button';

const News = () => {
  return (
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
          <Button>All</Button>
          <Button>Tutorials</Button>
          <Button>General</Button>
          <Button>Features</Button>
          <Button>News</Button>
          <Button>Update</Button>
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
  );
};

export default News;
