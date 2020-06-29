/* eslint-disable */

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component{
  constructor(){
    super();
    this.state= {
        isCollapsed: false,
    }
  }

  toggleNavbar(){
        console.log("dasda")
      this.setState({
          isCollapsed:!this.state.isCollapsed
      })
  }
  render(){
      const {isCollapsed} = this.state;
    return (
            <Navbar color="dark">
                <NavbarBrand className="nav-title">Almog's Gallery</NavbarBrand>
                <NavbarToggler onClick={()=>this.toggleNavbar()} className="mr-2" />
                <Collapse isOpen={!isCollapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

