import { Link } from "react-router-dom";


import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Header() {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/agendamento" className="nav-link">Agendamento</Link>
                    <Link to="/sac" className="nav-link">SAC</Link>
                    <Link to="/sobre" className="nav-link">Sobre</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Signup</Link>
                    <Button onClick={() => logout()}>
                        Sair
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}


export default Header;