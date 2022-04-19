import Link from 'next/link';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-heading'>
        <h2 className='h1'>Let&apos;s Work Together</h2>
      </div>
      <div className='button mt-4'>
        <Link href='./contact'>
          <a>
            <button className='btn'>Get in Touch</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
