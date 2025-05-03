import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import edwinImage from "./../assets/IMG.jpg";

function AboutMe() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  const handleShow = (item) => {
    setModalContent(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const trayectoria = [
    {
      title: "Lenguajes",
      text: "He trabajado con Java y JavaScript para crear soluciones robustas tanto del lado del cliente como del servidor.",
    },
    {
      title: "Herramientas",
      text: "Manejo herramientas como Bootstrap para estilos responsivos y GitHub para control de versiones.",
    },
    {
      title: "Habilidades",
      text: "Utilizo herramientas de inteligencia artificial para potenciar mis habilidades de desarrollo y optimización.",
    },
    {
      title: "Filosofía",
      text: "Me enfoco en alcanzar metas claras, resolver problemas y mantener una actitud de aprendizaje constante.",
    },
    {
      title: "Metodologías",
      text: "Trabajo con metodologías ágiles como Scrum y Kanban para mantener una buena gestión de proyectos.",
    },
    {
      title: "Proyectos",
      text: "He desarrollado sitios web dinámicos usando React, incluyendo dashboards, portafolios y tiendas online.",
    },
  ];

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

          {/* Quién Soy*/}
          <Col className="mt-5 text-center">
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
            <h3 className="text-center mb-4">Mi Trayectoria</h3>
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1200 },
                  items: 4,
                },
                desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
                tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
                mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
              }}
              infinite
              autoPlay={false}
            >
              {trayectoria.map((item, idx) => (
                <div key={idx} className="p-2">
                  <Card className="text-center h-100">
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text.slice(0, 80)}...</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleShow(item)}
                      >
                        Ver más
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Carousel>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>{modalContent.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalContent.text}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
<br />
<br />
        {/* Mi Estilo de Trabajo */}
        <Row className="mt-12 text-center">
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
        <Row className="mt-5 text-center">
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
}

export default AboutMe;
