import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const About = ({ about }) => {
  const markdown = about.toString();
  return (
    <div className='about container '>
      <div className='row py-4'>
        <div className='col-12'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default About;
