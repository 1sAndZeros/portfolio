import '../css/projects.css';

function ProjectCard({ project }) {
  if (project.complete) {
    return (
      <div className='project card shadow'>
        <img src={project.img} alt={project.name} />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className='card__buttons'>
          {project.deployed && (
            <a
              type='button'
              href={project.siteLink}
              target='_blank'
              rel='noreferrer'
              className='btn-site rounded-lg'
            >
              Site
            </a>
          )}
          <a
            type='button'
            href={project.codeLink}
            target='_blank'
            rel='noreferrer'
            className='btn-code'
          >
            <i className='fa-brands fa-github fa-xl' />
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
