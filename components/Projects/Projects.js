import Link from 'next/link';
import { useRouter } from 'next/router';

const Projects = ({ projects }) => {
  const router = useRouter();

  return (
    <div className='container mt-5 projects-container'>
      {projects.map((project, index) => {
        return (
          <div className='projects ' key={index}>
            <Link href={`/work/${project.fields.slug}`}>
              <a>
                <div className='row'>
                  <div className=' col-sm-4 mb-4 project-wrapper'>
                    <img src='/background.png' alt='.' className='project-bg' />
                    <img
                      src={`https:${project.fields.logo.fields.file.url}`}
                      className='project-img-thumbnail'
                      alt={project.fields.title}
                    />
                  </div>
                  <div className='project-description my-auto col-sm-8'>
                    <div className='project-headline'>
                      <h2 className='h1 font-weight-bold'>
                        {project.fields.title}
                      </h2>
                    </div>
                    {router.pathname == '/work' ||
                    router.pathname == '/services/[slug]' ? (
                      <div className='project-subtitle'>
                        <p
                          className='text-secondary mb-0'
                          style={{
                            textTransform: 'uppercase',
                            fontStyle: 'italic',
                            fontSize: 'var(--small-font-size)',
                          }}
                        >
                          {project.fields.category.fields.title}
                        </p>
                        <p>{project.fields.year}</p>
                      </div>
                    ) : (
                      <div className='project-subtitle'>
                        <p>{project.fields.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
