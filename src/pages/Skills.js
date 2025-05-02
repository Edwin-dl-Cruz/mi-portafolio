function Skills() {
    return (
      <section className="container " id="skills" data-aos="fade-left">
        <h2 className="text-center">Habilidades</h2>
        <div className="row text-center">
          <div className="col">
            <h5>Frontend</h5>
            <p>React, Bootstrap, Tailwind, Vite</p>
          </div>
          <div className="col">
            <h5>Backend</h5>
            <p>Node.js, Express, MongoDB, PostgreSQL</p>
          </div>
          <div className="col">
            <h5>DevOps</h5>
            <p>Docker, AWS, Vercel</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;