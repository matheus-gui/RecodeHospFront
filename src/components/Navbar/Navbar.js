import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import routes from '../../routes/routes';

const Navegador = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar id="navbar" color="primary" dark>
        <NavbarBrand href="/" className="mr-auto">Hospital ReCode</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-3" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {routes.map((route, index) => {
              if (route.navbar) {
                return <NavItem key={index}>
                  <NavLink href={route.path}>{route.name}</NavLink>
                  </NavItem>
              };
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegador;