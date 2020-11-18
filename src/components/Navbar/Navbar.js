import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import routes from '../../routes/routes';

const Navegador = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar id="navbar" style={{color:"white"}} dark>
        <NavbarBrand 
          href="/" 
          className="mr-auto" 
          style={{color:"blue", fontFamily:"segoe", fontWeight:"bold", fontSize:"30px"}}>
          HOSPITAL 
          <p style={{padding:"0px", marginBottom:"0px"}}>
            RECODE
          </p>
        </NavbarBrand>
        
        <NavbarToggler 
          style={{backgroundColor:"blue"}} 
          onClick={toggleNavbar} className="mr-3"  
        />
        
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {routes.map((route, index) => {
              if (route.navbar) {
                return <NavItem key={index}>
                          <NavLink 
                            href={route.path} 
                            style={{color:"blue", fontFamily:"segoe", fontWeight:"bold", fontSize:"25px"}}>
                            {route.name} 
                          </NavLink>
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