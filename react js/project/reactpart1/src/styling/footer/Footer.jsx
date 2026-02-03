import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './footer.css'

function Footer() {
  return (
    <>
      {/* Top footer */}
      <footer className="bg-dark text-light py-4">
        <Container fluid className="text-center">

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-3 mb-3">
            <a href="#" className="icon-circle fb">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="icon-circle ig">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="icon-circle tw">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="icon-circle gl">
              <i className="bi bi-google"></i>
            </a>
            <a href="#" className="icon-circle you">
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          {/* Footer Links */}
          <Nav className="justify-content-center gap-4">
            <Nav.Link href="#" className="footer-link">Home</Nav.Link>
            <Nav.Link href="#" className="footer-link">News</Nav.Link>
            <Nav.Link href="#" className="footer-link">About</Nav.Link>
            <Nav.Link href="#" className="footer-link">Contact Us</Nav.Link>
            <Nav.Link href="#" className="footer-link">Our Team</Nav.Link>
          </Nav>

        </Container>
      </footer>

      {/* Bottom strip */}
      <div className="bg-black text-light text-center py-2">
        <small>Copyright ©2022; Designed by Roshan</small>
      </div>
    </>
  );
}

export default Footer;
