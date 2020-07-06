import React, { useState } from 'react';

import {
    Container,
    Jumbotron,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const menu = () => {
    <Navbar color="dark" dark expand="md" className="fixed-top">
        <Container>
            <NavbarBrand href="/"><FontAwesomeIcon icon="laptop-code" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/#inicio">Inicio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#quem-somos">Quem Somos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#servicos">Serviços</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#portifolio">Portifólio</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
}

export default menu;