import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import edwinImage from "./../assets/IMG.jpg"; 

function AboutMe () {
  return (
    <section id="about" className="container about-section" data-aos="zoom-in">
      <Container>
        <Row className="align-items-center">
          {/* Hero Section */}
          <Col md={12} className="text-center">
            <img
              src={edwinImage} // Cambia esto por tu foto real
              alt="Edwin Marquez"
              className="about-img img-fluid rounded-circle"
            />
            <h1 className="mt-5">Edwin Marquez</h1>
            <h4>Egresado en Ingeniería en Sistemas Computacionales</h4>
            <p className="lead">
              "Aprender constantemente y evolucionar al ritmo de la tecnología."
            </p>
          </Col>

          {/* Quién Soy */}
          <Col  className="mt-5">
            <h3>¿Quién Soy?</h3>
            <p className="lead">
              Soy un ingeniero en sistemas comprometido con la evolución
              tecnológica. Con 2 años de experiencia, me especializo en el
              desarrollo Front-End, implementando nuevas tecnologías y
              automatizando procesos para mejorar la eficiencia.
            </p>
          </Col>
        </Row>

        {/* Mi Trayectoria */}
        <Row className="mt-5">
          <Col>
            <h3>Mi Trayectoria</h3>
            <ul>
              <li>
                <strong>Lenguajes:</strong> Java, JavaScript
              </li>
              <li>
                <strong>Herramientas:</strong> Bootstrap, GitHub
              </li>
              <li>
                <strong>Habilidades:</strong> Uso de IA para potenciar
                habilidades
              </li>
              <li>
                <strong>Filosofía:</strong> Responsable con mis objetivos y
                siempre enfocado en resolver problemas.
              </li>
            </ul>
            <br></br>
          </Col>
        </Row>

        {/* Mi Estilo de Trabajo */}
        <Row className="mt-12">
          <Col>
            <h3>Mi Estilo de Trabajo</h3>
            <p className="lead">
              Soy una persona comprometida, orientada a resultados y me apasiona
              implementar nuevas tecnologías. Siempre busco aprender y
              evolucionar al ritmo de la tecnología.
            </p>
          </Col>
        </Row>

        {/* Más Allá del Código */}
        <Row className="mt-5">
          <Col>
            <h3>Más Allá del Código</h3>
            <p className="lead">
              Me encanta el deporte, siempre estoy activo. Practico fútbol,
              patinaje, voy al gimnasio y disfruto explorar pueblos en moto.
              Además, tengo experiencia en la coordinación de eventos (sonido,
              música y luces), especialmente en teatros. La creación de
              contenido y las redes sociales también son algo que disfruto
              mucho.
            </p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button variant="primary" href="#contact">
              ¡Conectemos!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
