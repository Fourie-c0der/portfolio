function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description: "C# program that uses ADO.Net to manage students.",
      image: "images/student_managment.PNG", 
      technologies: ["C#", "ADO.Net"],
      link: "https://github.com/Fourie-c0der/PRG272_Project"
    },
    {
      title: "Info Site",
      description: "A website that gives information about my university and all its certifications.",
      image: "images/bc_website.PNG", 
      technologies: ["Javascript", "HTML", "CSS"], 
      link: "https://github.com/Fourie-c0der/Interactive_Website/tree/main"
    },
    {
      title: "Docker App",
      description: "A student grade app that is run and tested in a docker container.",
      image: "images/docker_app.PNG", 
      technologies: ["C#", "Docker"], 
      link: "https://github.com/Fourie-c0der/Cloud-app-program"
    }
    
  ];

  return (
    <section className="projects" id="projects">
      <h2>My personal projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="content">
              <div className="project-icon">
                {/* Add project icon/logo here */}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
