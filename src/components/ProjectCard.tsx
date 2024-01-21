import React from 'react';
import '../css/projects.css';
import { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  if (!project.complete) {
    return null;
  }

  return (
    <div className='project card shadow'>
      <img src={project.img} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className='card__buttons'>
        {project.siteLink && (
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
};

export default ProjectCard;
