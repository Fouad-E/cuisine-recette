import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse,Nav, NavItem, NavLink } from 'reactstrap';

const NavbarRecipe = () => {
    return(
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> Miam's </NavbarBrand>
        <NavbarToggler  />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Search a recipe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/favoritesRecipe">Favorites recipes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default NavbarRecipe;