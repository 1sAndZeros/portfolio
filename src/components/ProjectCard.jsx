import '../css/projects.css';

function ProjectCard({ img, name, description, siteLink, codeLink }) {
  return (
    <div className='card shadow'>
      <img className='mb-3 w-full' src={img} alt={name} />
      <div className='card__content'>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className='card__buttons content-end'>
          <a type='button' href={siteLink} className='btn-site rounded-lg'>
            Demo
          </a>
          <a type='button' href={codeLink} className='btn-code'>
            <i className='fa-brands fa-github fa-xl' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
