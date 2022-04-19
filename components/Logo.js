import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className='scrypt-logo container'>
      <Tilt className='hero-wrapper' perspective={1000}>
        <h1 className='scrypt-title'>Scrypt Spider</h1>
        <img
          src='/bg-spider.png'
          alt='Scrypt Spider'
          className='img-fluid hero-logo'
        />
      </Tilt>
    </div>
  );
};

export default Logo;
