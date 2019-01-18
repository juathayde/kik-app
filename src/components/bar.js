/*
  navigation-bar displays the list of sections for the collection of
  articles passed down in its props. Clicking on one of these sections displays
  a list of the available titles in that current section.
*/
/* eslint no-underscore-dangle: [2, { "allow": ["_id"] }] */
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">KiK</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/intro/">Intro & Participants</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/swahili/">Why Swahili?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/kigali/">Why Kigali?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/kik/">Swahili in Kigali</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/kik/">Swahili Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/kik/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </div>
    );
  }
}
