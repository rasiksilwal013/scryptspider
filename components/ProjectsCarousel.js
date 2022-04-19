import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ProjectsCarousel = ({ service }) => {
  return (
    <>
      <div>
        <h2 className='h1 my-5'>Our Services</h2>
      </div>
      <Container>
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          className='mySwiper row'
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {service.map((s, projectIndex) => {
            return (
              <SwiperSlide className='slide col-sm-4' key={projectIndex}>
                <Link href={`/services/${s.slug}`}>
                  <a>
                    <img
                      className='img-fluid'
                      src={s.image.fields.file.url}
                      alt='project-img'
                    />
                    <div className='projects-description'>
                      <h3>{s.title}</h3>
                      <p>{s.summary}</p>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className='slide col-sm-4'>
            <a href='#'>
              <img
                src='./mobile-dev.jpg'
                className='img-fluid'
                alt='project-img'
              />
              <div className='projects-description'>
                <h3>Mobile App Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide col-sm-4'>
            <a href='#'>
              <img
                src='./digital-marketing.jpg'
                className='img-fluid'
                alt='project-img'
              />
              <div className='projects-description'>
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='slide col-sm-4'>
            <a href='#'>
              <img
                src='./graphics-design.jpg'
                className='img-fluid'
                alt='project-img'
              />
              <div className='projects-description'>
                <h3>Graphics Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </a>
          </SwiperSlide> */}
        </Swiper>
      </Container>
    </>
  );
};

export default ProjectsCarousel;
