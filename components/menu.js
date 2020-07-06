import React, { useState } from 'react';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
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
    )
}

export default Menu;