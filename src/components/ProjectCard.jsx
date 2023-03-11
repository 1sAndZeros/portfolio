import '../css/projects.css';

function ProjectCard({ img, name, description, siteLink, codeLink }) {
  return (
    <div className='card shadow'>
      <img src={img} alt={name} />
      <div className='card__content'>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className='card__buttons md:hello'>
          <a
            type='button'
            href={siteLink}
            target='_blank'
            rel='noreferrer'
            className='btn-site rounded-lg'
          >
            Demo
          </a>
          <a
            type='button'
            href={codeLink}
            target='_blank'
            rel='noreferrer'
            className='btn-code'
          >
            <i className='fa-brands fa-github fa-xl' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
