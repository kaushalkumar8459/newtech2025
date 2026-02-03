import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/react.svg'
import './header.css'

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand className="me-auto">
                    <img
                        src={logo}
                        alt="Logo"
                        width="40"
                        height="40"
                    />
                </Navbar.Brand>

                <Nav>
                    <Nav.Link className='Navbar' href="#home">Home</Nav.Link>
                    <Nav.Link className='Navbar' href="#features">Features</Nav.Link>
                    <Nav.Link className='Navbar' href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header




