const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto 1.",
      link: "https://github.com/tu-usuario/proyecto1"
    },
    {
      title: "Proyecto 2",
      description: "Descripción breve del proyecto 2.",
      link: "https://github.com/tu-usuario/proyecto2"
    },
    // Agrega más proyectos aquí
  ];
  
  function Projects() {
    return (
      <section className="container " id="projects">
        <h2 className="text-center mb-4" data-aos="fade-up">Mis Proyectos</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos="zoom-in">
              <div className="card h-100 bg-secondary bg-gradient text-white">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  