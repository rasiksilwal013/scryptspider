import { Button } from 'react-bootstrap';

const Projects = ({ projects }) => {
  return (
    <div className='container mt-5 projects-container'>
      <div className='pt-4 font-weight-bold text-center'>
        <h2 className='h1  '>Our Latest Case Studies</h2>
        <Button>our work</Button>
      </div>
      {projects.map((project, index) => {
        return (
          <div key={index} className='projects row'>
            <div className=' col-sm-4 mb-3'>
              <img
                src={`https:${project.fields.hero.fields.file.url}`}
                className='project-img-thumbnail'
              />
            </div>
            <div className='project-description mb-3 col-sm-8'>
              <div className='project-headline'>
                <h1> - {project.fields.title}</h1>
              </div>
              <div className='project-subtitle'>
                <p>{project.fields.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
