import projectsIcon from '../assets/svg-icons/projects.svg';
import HeadingPrimary from '../components/HeadingPrimary';
import ProjectCard from '../components/ProjectCard';
import Subheading from '../components/Subheading';
import projects from '../data/projects';
import '../css/projects.css';

function Projects() {
  return (
    <main className='main'>
      <HeadingPrimary text='Projects' icon={projectsIcon} />
      <Subheading text='Check it out!' />
      <div className='projects-container'>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              img={project.img}
              siteLink={project.siteLink}
              codeLink={project.codeLink}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Projects;
