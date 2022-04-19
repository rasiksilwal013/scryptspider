import React from 'react';

import Button from '../components/Button';
import axios from 'axios';

const Contact = () => {
  // const [data, setData] = React.useState({
  //   firstname: '',
  //   lastName: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // console.log(data);
  const [firstName, setFirstname] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  // const handleInput = (e) => {
  //   setData(([e.target.name] = e.target.value));
  // };

  const handleSubmit = (e) => {
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
        console.log(res.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <div className='contact-form-heading'>
        <h1>Get in touch</h1>
        <h1>Type or talk</h1>
      </div>
      <div className='inputs'>
        {/* <Input name='firstName'>
          <p>First Name</p>
        </Input>
        <Input name='lastName' onChange={handleInput}>
          <p>Last Name</p>
        </Input>
        <Input name='email' onChange={handleInput}>
          <p>Email</p>
        </Input>
        <Input name='subject' onChange={handleInput}>
          <p>Subject</p>
        </Input> */}
        <input
          type='text'
          placeholder='FirstName'
          name='firstName'
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type='text'
          placeholder='LastName'
          name='lastName'
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Subject'
          name='subject'
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className='textarea'>
        <textarea
          placeholder='How can we help you?'
          name='textarea'
          onChange={(e) => setMessage(e.target.value)}
          rows='10'
          cols='30'
        />
        {/* <TextArea name='message' onChange={handleInput}>
          <p>How can we help you?</p>
        </TextArea> */}
      </div>
      <div className='submit-button'>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default Contact;
