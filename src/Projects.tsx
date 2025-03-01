import './Projects.css';

// Projects Section Component
const Projects: React.FC = () => {
    const projects = [
      { id: 1, title: "Project One", link: "#project1" },
      { id: 2, title: "Project Two", link: "#project2" },
      { id: 3, title: "Project Three", link: "#project3" },
      { id: 4, title: "Project Four", link: "#project4" },
      { id: 5, title: "Project Five", link: "#project5" },
    ];
  
    return (
        <div className="projects-content">
          <h2>Our Projects</h2>
          <p>We're not just tech experts – we're partners invested in your success.</p>
          <div className="projects">
            {projects.map(project => (
              <a href={project.link} key={project.id} className="project-box">
                {project.title}
              </a>
            ))}
          </div>
        </div>
    );
  };

export default Projects;