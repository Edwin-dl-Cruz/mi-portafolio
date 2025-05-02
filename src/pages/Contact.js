function Contact() {
    return (
      <section className="container " id="contact" data-aos="flip-up">
        <h2 className="text-center">Contacto</h2>
        <form className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Tu nombre" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Tu email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Tu mensaje" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </section>
    );
  }
  
  export default Contact;