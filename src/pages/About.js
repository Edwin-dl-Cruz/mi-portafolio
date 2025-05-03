import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import edwinImage from "./../assets/IMG.jpg";
import { useEffect } from "react";

function AboutMe() {
  // Scroll Arrow
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  const handleShow = (item) => {
    setModalContent(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const trayectoria = [
    {
      title: "Soporte Técnico",
      subtitle: "Teleperformance CLIP (2022 - 2023)",
      text: `Brindé atención al cliente y soporte remoto por diferentes canales como llamadas y correo electrónico. Además, lideré actividades de Back Office, presté soporte en la mesa de control y en la aplicación móvil, asegurando la operación fluida de los sistemas y la experiencia del usuario.`,
    },
    {
      title: "Auxiliar de Sistemas",
      subtitle: "Instituto Cedrus (2023 - 2024)",
      text: `Me encargué del mantenimiento preventivo y correctivo del equipo tecnológico. Gestioné tickets de soporte técnico con Freshdesk, desarrollé aplicaciones móviles utilizando plataformas no-code y gestioné el sitio web institucional mediante WordPress.`,
    },
    {
      title: "Gerente de Turno",
      subtitle: "McDonald's (2018 - 2020)",
      text: `Supervisé operaciones y cumplí con indicadores clave de rendimiento (KPIs). Coordiné al personal durante los turnos y prioricé la experiencia del cliente para asegurar altos niveles de satisfacción.`,
    },
    {
      title: "Asesor Educativo (Home Office)",
      subtitle: "Universidad UTEL y Ucamp (2020 - 2022)",
      text: `Ofrecí atención personalizada a estudiantes interesados en programas académicos. Participé en procesos de ventas y brindé orientación educativa, ayudando a los alumnos a tomar decisiones informadas sobre su formación.`,
    },
  ];

  return (
    <section id="about" className="container about-section">
      <Container>
        <Row className="align-items-center">
          {/* Hero Section */}
          <Col md={12} className="text-center " data-aos="zoom-in">
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
          <Col className="mt-5 text-center" data-aos="zoom-in">
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
          <Col data-aos="flip-up">
            <h3 className="text-center mb-4">Mi Trayectoria</h3>
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1200 },
                  items: 3,
                },
                desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
                tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
                mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
              }}
              infinite
              autoPlay={true}
              autoPlaySpeed={4000} // tiempo entre cada cambio en milisegundos
              transitionDuration={2000} // duración de la animación del cambio en milisegundos
            >
              {trayectoria.map((item, idx) => (
                <div key={idx} className="p-2">
                  <Card className="text-center h-100">
                    <Card.Body className="card-fixed-height">
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.subtitle}
                      </Card.Subtitle>
                      <Card.Text>{item.text.slice(0, 100)}...</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleShow(item)}
                      >
                        Ver más
                      </Button>
                    </Card.Body>
                    {/* {trayectoria.map((item, idx) => (
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
                    </Card.Body> */}
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
        <Row className="mt-12 text-center" data-aos="zoom-in">
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
        <Row className="mt-5 text-center" data-aos="zoom-in">
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

      {showArrow && <div className="scroll-down-arrow">↓</div>}
    </section>
  );
}

export default AboutMe;
