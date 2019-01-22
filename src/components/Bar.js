import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown } from 'reactstrap';

  import Slider from './Slider.js';
  import MapContainer from './Map.js';
  import PhraseBook from './PhraseBook.js';

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
      this.handleIntro = this.handleIntro.bind(this);
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
          <NavbarBrand href="/" brand={icon}> <b>KiK: Kiswahili in Kigali</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.handleHome}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleIntro}>About KiK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleWhySwahili}>Why Swahili?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleWhyKigali}>Why Kigali?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleKiK}>Swahili in Kigali</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleResources}>Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleContact}>Contact</NavLink>
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
          <PhraseBook />
        </div>
      );
    }
    else if (this.state.viewmode === 'WK'){
      return (
        <div>
          {navigationBar}
          <br />
          <h1> This is the the why kigali page </h1>
        </div>
      );
    }
    else if (this.state.viewmode === 'KiK'){
      return (
        <div>
          {navigationBar}
          <br />
          <h1> This is the the Swahili in Kigali page </h1>
        </div>
      );
    }
    else if (this.state.viewmode === 'Resources'){
      return (
        <div>
          {navigationBar}
          <br />
          <MapContainer />
        </div>
      );
    }
    else if (this.state.viewmode === 'Contact'){
      return (
        <div>
          {navigationBar}
          <br />
          <address align='left'>
            <b>Middlebury Center for Social Entrepreneurship</b><br />
            118 South Main St.<br />
            Middlebury, VT 05753<br />
            USA<br />
            <a href="mailto:innovationhub@middlebury.edu">innovationhub@middlebury.edu</a>
          </address>
          <br />
          <address align='left'>
            <b> African Leadership Academy Rwanda</b><br />
            Kigali Heights<br />
            2nd Floor, KG 7 Ave<br />
            Kigali, Rwanda<br />
            <a href="mailto:info@alueducation.com">info@alueducation.com</a>
          </address>
        </div>
      );
    }
    else {
      console.log("error");
    }
  }
}
