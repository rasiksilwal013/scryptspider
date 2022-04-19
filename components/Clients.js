import Link from 'next/link';

const Clients = () => {
  return (
    <div className='clients-hero'>
      <div className='clients-title'>
        <h1>Who we</h1>
        <h1>&nbsp;&nbsp;work with</h1>
      </div>
      <div className='clients'>
        <div className='client'>
          <img src='/monnos.svg' width={280} height={130} />
        </div>
        <div className='client'>
          <img src='/medium.svg' width={280} height={130} />
        </div>
        <div className='client'>
          <img src='/orangebus.svg' width={280} height={130} />
        </div>
        <div className='client'>
          <img src='/cafe-coffee-day.svg' width={280} height={130} />
        </div>
        <div className='client'>
          <img src='/medium.svg' width={280} height={130} />
        </div>
        <div className='client'></div>
        <div className='client'>
          <img src='/orangebus.svg' width={280} height={130} />
          <img src='/cafe-coffee-day.svg' width={280} height={130} />
        </div>
        <div className='client'>
          <img src='/monnos.svg' width={280} height={130} />
        </div>
      </div>

      <div className='clients-contact'>
        <Link href='/contact'>
          <a>
            <h1>Seen enough?</h1>
            <div className='contact-animation'>
              <div className='line'>&nbsp;&nbsp;</div>
              <h1>get in touch</h1>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Clients;
