const Footer = () => {
  return (
    <div className='container footer-main'>
      <div className=' row footer '>
        <div className='col-sm-4 col-12 visit'>
          <h1>Visit</h1>
          <p>ScryptSpider Technologies Pvt. Ltd</p>
          <p>Sankhamul, Kathmandu</p>
          <p>Nepal</p>
        </div>
        <div className='col-sm-4 col-12 new-business'>
          <h1>New Business</h1>
          <a
            href='mailto:info@scryptspider.com?subject=Inquiry'
            target='_blank'
          >
            info@scryptspider.com
          </a>
          <p>+977-9806088686</p>
        </div>
        <div className=' col-sm-4 col-12 follow-us'>
          <h1>Follow</h1>
          <a href='https://www.facebook.com/ScryptSpider/' target='_blank'>
            <i className='lab la-facebook-square'></i>
          </a>
          <a
            href='https://www.linkedin.com/company/scryptspider'
            target='_blank'
          >
            <i className='lab la-linkedin'></i>
          </a>
        </div>
        {/* <div className='col-sm-3 col-12 our-newsletter'>
          <h1>Our Newsletter</h1>
          <Input>
            <text>Enter Email</text>
          </Input>
          <Button>submit</Button>
        </div> */}
      </div>
      <div>
        <p className='copyright'>
          © 2021 ScryptSpider Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
