function Footer() {
    return (
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1">Desarrollado por CODE © {new Date().getFullYear()}</p>
          <div>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  