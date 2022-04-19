import Slider from 'react-slick';
import { useRouter } from 'next/router';

const Partner = ({ work }) => {
  const router = useRouter();
  const settings = {
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    slidesPerRow: 4,
    rows: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 4,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className='container my-5'>
      <div className='row pt-5 pb-3'>
        <div className='col-12'>
          <h3 className='h1 text-center '>Brands we&apos;ve worked with</h3>
        </div>
      </div>
      {router.pathname == '/' ? (
        <div className='row py-4 '>
          <div className='partners-container col-12'>
            <Slider className='' {...settings}>
              {work.map((w) => {
                return (
                  <img
                    key={w.title}
                    className='img-fluid partners-img'
                    src={w.logo.fields.file.url}
                    alt={w.title}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      ) : (
        <div className='row py-4'>
          {work.map((logo) => {
            return (
              <div className='col-md-3 col-6 py-3' key={logo.title}>
                <div className='partners'>
                  <img
                    className='partners-img'
                    alt={logo.title}
                    src={`https:${logo.logo.fields.file.url}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Partner;
