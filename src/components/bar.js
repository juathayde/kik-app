import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  var icon = (
    <span class="logo">
      <a href="/">
        <img src="/awesome-logo.png" height="33" width="120" alt="text here" /></a>
    </span>
  );

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" brand={icon}><b>KiK: Kiswahili in Kigali</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Intro & Participants
                </DropdownItem>
                <DropdownItem>
                  Why Swahili?
                </DropdownItem>
                <DropdownItem>
                  Why Kigali?
                </DropdownItem>
                <DropdownItem>
                  Swahili in Kigali
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Swahili Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="contact_us">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
