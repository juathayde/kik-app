
import React, { Component } from 'react';
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

  import Slider from './Slider.js';

  var icon = (
    <span class="logo">
      <a href="/">
        <img src="/kik-logo.png" height="33" width="120" alt="text here" /></a>
    </span>
  );

  export default class NavBar extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        viewmode: 'Home' //Intro, Why Swahili, Why Kigali, Swahili in Kigali, Swahili Resources, Contact Us
      };

      this.toggle = this.toggle.bind(this);
      this.handleIntro = this.handleIntro.bind(this);
      this.handleWhySwahili = this.handleWhySwahili.bind(this);
      //this.handleIntro();
    }

    componentDidMount() {
      this.setState({
        viewmode: 'Home'
      });
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    handleIntro() {
      this.setState({
        viewmode: 'Intro'
      });
    }

    handleWhySwahili() {
      this.setState({
        viewmode: 'WS'
      });
    }

  render() {
    const navigationBar = (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" brand={icon}> <b>KiK: Kiswahili in Kigali</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <div onClick={this.handleIntro}>Intro & Participants</div>
                </DropdownItem>
                <DropdownItem>
                  <div onClick={this.handleWhySwahili}>Why Swahili?</div>
                </DropdownItem>
                <DropdownItem>
                  Why Kigali?
                </DropdownItem>
                <DropdownItem>
                  Swahili in Kigali
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Home
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
    )
    //homescreen view
    if (this.state.viewmode === 'Home') {
      return (
        <div>
          {navigationBar}
          <br />
          <Slider />
        </div>
      );
    }
  //Introduction & participants
    else if (this.state.viewmode === 'Intro') {
      return (
        <div>
          {navigationBar}
          <br />
          <h1> This is the intro page </h1>
        </div>
      );
    }
    else if (this.state.viewmode === 'WS'){
      return (
        <div>
          {navigationBar}
          <br />
          <h1> This is the the why swahili page </h1>
        </div>
      );
    }
    else {
      console.log("error");
    }
  }
}
