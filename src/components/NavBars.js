import React from "react";
import "../Assets/CSS/index.css";
import { Container, Navbar, Nav, NavbarBrand} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo/waysbucks.png";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Button from 'react-bootstrap/Button';

const Navbars = () => {
    const [email, setEmail] = React.useState(false);
    const [register, setRegister] = React.useState(false);

    return ( 
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <NavbarBrand as={Link} to="/">
                    <img 
                        src={logo}
                        alt="dumbways"
                        width="50" 
                        className="dumbways-logo"
                        />
                </NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                <Nav>
                    <Button className="btn-login" variant="outline-danger" onClick={() => setEmail(true)}>
                        Login
                    </Button>
                    <LoginForm
                    show={email}
                    onHide={() => setEmail(false)}
                    />

                    <Button className="btn-register" variant="danger" onClick={() => setRegister(true)}>
                        Register
                    </Button>
                    <RegisterForm
                    show={register}
                    onHide={() => setRegister(false)}
                    />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navbars;