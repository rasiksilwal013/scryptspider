import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstname] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    axios
      .post('/api/contact', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        setLoader(false);
        thanks();
        setFirstname('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
        toast.success(res.data.message, {
          color: 'red',
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
        toast.error('Something went wrong!', {
          color: 'red',
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const thanks = () => {
    axios
      .post('/api/thanks', {
        name: firstName,
        email: email,
      })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Scrypt Spider</title>
        <meta property='og:title' content='Contact Us - Scrypt Spider' />
        <meta name='twitter:title' content='Contact Us - Scrypt Spider' />
      </Head>
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
        className='contact-form container'
      >
        <div className='contact-form-heading row'>
          <h1>Get in touch</h1>
          <h1>Type or talk</h1>
        </div>
        <div className='row'>
          <div className='inputs  col-md-6 mb-4'>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              onChange={(e) => setFirstname(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div className='col-md-6 mb-4'>
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>

          <div className='col-md-6 mb-4'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className='col-md-6 mb-4'>
            <input
              type='text'
              placeholder='Subject'
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            />
          </div>

          <div className='textarea col-md-12'>
            <textarea
              placeholder='How can we help you?'
              name='textarea'
              onChange={(e) => setMessage(e.target.value)}
              rows='10'
              cols='30'
              value={message}
              required
            />
          </div>
        </div>
        <div className='submit-button'>
          <button type='submit' className='btn my-5'>
            {loader ? (
              <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
        <ToastContainer
          toastStyle={{
            backgroundColor: '#1a1a1a',
            color: 'var(--text-color)',
          }}
        />
      </form>
    </>
  );
};

export default Contact;
