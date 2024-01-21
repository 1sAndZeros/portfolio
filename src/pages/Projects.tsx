import projectsIcon from '../assets/svg-icons/projects.svg';
import HeadingPrimary from '../components/HeadingPrimary';
import ProjectCard from '../components/ProjectCard';
import Subheading from '../components/Subheading';
import projects from '../data/projects';
import '../css/projects.css';

function Projects() {
  return (
    <main id='projects' className='main'>
      <HeadingPrimary text='Projects' icon={projectsIcon} />
      <Subheading text='Check it out!' />
      <div className='projects-container'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </main>
  );
}

export default Projects;
