import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={8} className="text-center fade-in">
            <h1 className="hero-title">Hi, I'm Yvonne</h1>
            <p className="hero-subtitle">前端開發者 / UI 設計師 / 創作者</p>
            <Button 
              variant="outline-light" 
              className="hero-button"
              onClick={scrollToProjects}
            >
              看看我的作品
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
