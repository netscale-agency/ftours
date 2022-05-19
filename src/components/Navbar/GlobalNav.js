import React, { useState } from "react";
import "../../styles/components/Navbar/GlobalNav.css";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
function GlobalNav() {
  const [showSkolska, setShowSkolska] = useState(false);
  const [showDaleka, setShowDaleka] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container className="container-nav">
          <Navbar.Brand href="/">
            <img src={Logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Naslovnica</Nav.Link>
              <NavDropdown
                className="navdropdown"
                onMouseEnter={() => setShowSkolska(true)}
                onMouseLeave={() => setShowSkolska(false)}
                onToggle={() => {
                  window.location.href = "skolska-putovanja";
                }}
                title="Školska putovanja"
                id="collasible-nav-dropdown"
                show={showSkolska}
              >
                <NavDropdown.Item href="#izleti">Izleti</NavDropdown.Item>
                <NavDropdown.Item href="#osnovne-skole">
                  Osnovne škole
                </NavDropdown.Item>
                <NavDropdown.Item href="#srednje-skole">
                  Srednje škole
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                onMouseEnter={() => setShowDaleka(true)}
                onMouseLeave={() => setShowDaleka(false)}
                onToggle={() => {
                  window.location.href = "europska-i-daleka-putovanja";
                }}
                title="Europska i daleka putovanja"
                id="collasible-nav-dropdown"
                show={showDaleka}
              >
                <NavDropdown.Item href="#europska-putovanja">
                  Europska putovanja
                </NavDropdown.Item>
                <NavDropdown.Item href="#daleka-putovanja">
                  Daleka putovanja
                </NavDropdown.Item>
                <NavDropdown.Item href="#nova-godina">
                  Nova godina
                </NavDropdown.Item>
                <NavDropdown.Item href="krstarenja">
                  Krstarenja
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="o-nama">O nama</Nav.Link>
              <Nav.Link href="kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default GlobalNav;
