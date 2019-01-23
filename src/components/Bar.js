import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PhraseBook from './PhraseBook.js';
import Home from './Home.js';
import SwahiliInKigali from './SwahiliInKigali.js';
import WhyKigali from './WhyKigali.js';
import Resources from './Resources.js';
import About from './About.js';
import Contact from './Contact.js';

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
        viewmode: 'Home'
      };

      this.toggle = this.toggle.bind(this);
      this.handleAbout = this.handleAbout.bind(this);
      this.handleWhySwahili = this.handleWhySwahili.bind(this);
      this.handleWhyKigali = this.handleWhyKigali.bind(this);
      this.handleKiK = this.handleKiK.bind(this);
      this.handleHome = this.handleHome.bind(this);
      this.handleResources = this.handleResources.bind(this);
      this.handleContact = this.handleContact.bind(this);
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

    handleAbout() {
      this.setState({
        viewmode: 'About'
      });
    }

    handleWhySwahili() {
      this.setState({
        viewmode: 'WS'
      });
    }

    handleWhyKigali() {
      this.setState({
        viewmode: 'WK'
      });
    }

    handleKiK() {
      this.setState({
        viewmode: 'KiK'
      });
    }

    handleHome() {
      this.setState({
        viewmode: 'Home'
      });
    }

    handleResources() {
      this.setState({
        viewmode: 'Resources'
      });
    }

    handleContact() {
      this.setState({
        viewmode: 'Contact'
      });
    }

  render() {
    const navigationBar = (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" brand={icon}> <b>KiK</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.handleHome}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleAbout}>About KiK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleWhySwahili}>Why Kiswahili?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleWhyKigali}>Why Kigali?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleKiK}>Kiswahili in Kigali</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleResources}>Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleContact}>Contact Us</NavLink>
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
          <Home />
        </div>
      );
    }
    //About project
    else if (this.state.viewmode === 'About') {
      return (
        <div>
          {navigationBar}
          <br />
          <About />
        </div>
      );
    }
    else if (this.state.viewmode === 'WS'){
      return (
        <div>
          {navigationBar}
          <br />
          <PhraseBook />
        </div>
      );
    }
    else if (this.state.viewmode === 'WK'){
      return (
        <div>
          {navigationBar}
          <br />
          <WhyKigali />
        </div>
      );
    }
    else if (this.state.viewmode === 'KiK'){
      return (
        <div>
          {navigationBar}
          <br />
          <SwahiliInKigali />
        </div>
      );
    }
    else if (this.state.viewmode === 'Resources'){
      return (
        <div>
          {navigationBar}
          <br />
          <Resources />
        </div>
      );
    }
    else if (this.state.viewmode === 'Contact'){
      return (
        <div>
          {navigationBar}
          <br />
          <Contact />
        </div>
      );
    }
    else {
      console.log("error");
    }
  }
}
