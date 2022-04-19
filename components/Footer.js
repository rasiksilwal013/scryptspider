const Footer = () => {
  return (
    <footer className='container footer-main mt-5'>
      <hr />
      <div className=' row footer mt-5 '>
        <div className='col-sm-4 col-12 visit'>
          <h2 className='mb-4'>Visit</h2>
          <p>
            ScryptSpider Technologies Pvt. Ltd <br />
            Shankhamul, Kathmandu <br />
            Nepal
          </p>
        </div>
        <div className='col-sm-4 col-12 new-business'>
          <h2 className='mb-4'>New Business</h2>
          <a
            href='mailto:info@scryptspider.com?subject=Inquiry'
            target='_blank'
            rel='noreferrer'
          >
            info@scryptspider.com
          </a>
          <p>+977-9806088686</p>
        </div>
        <div className=' col-sm-4 col-12 follow-us'>
          <h2 className='mb-4'>Follow</h2>
          <a
            href='https://www.facebook.com/ScryptSpider/'
            target='_blank'
            rel='noreferrer'
            className='d-inline-block'
          >
            <i
              className='lab la-facebook-f facebook'
              target='_blank'
              rel='noreferrer'
            ></i>
          </a>
          <a
            href='https://www.linkedin.com/company/scryptspider'
            target='_blank'
            rel='noreferrer'
            className='d-inline-block'
          >
            <i
              className='lab la-linkedin-in linkedin'
              target='_blank'
              rel='noreferrer'
            ></i>
          </a>
        </div>
      </div>
      <div>
        <p className='copyright  mt-5 text-center '>
          &copy; {new Date().getFullYear()} ScryptSpider Technologies. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
