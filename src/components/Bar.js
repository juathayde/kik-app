import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import AudioTable from './AudioTable.js';
import WhySwahili from './WhySwahili.js';
import Home from './Home.js';
import SwahiliInKigali from './SwahiliInKigali.js';
import WhyKigali from './WhyKigali.js';
import Resources from './Resources.js';
import About from './About.js';
import Contact from './Contact.js';
import KiKLogo from './image_files/kik-logo.png';

var imgStyle = {
  maxHeight: '30px',
  maxWidth: '100px',
};

export default class NavBar extends Component {
    constructor(props) {
      super(props);

      this.state = {
        viewmode: 'Home'
      };

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
          <NavbarBrand href="#">
            <img src={KiKLogo} style={imgStyle} alt="" />{' '}
            <b>KiK</b>
          </NavbarBrand>
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
          <WhySwahili />
          <br />
          <AudioTable />
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

// <br />
// <Container align="left">
// <h4>References:</h4>
// <li><a href="https://www.omniglot.com/writing/swahili.htm">https://www.omniglot.com/writing/swahili.htm</a></li>
// <li><a href="https://clp.arizona.edu/swahili">https://clp.arizona.edu/swahili</a></li>
// <li><a href="https://www.newtimes.co.rw/section/read/207927">https://www.newtimes.co.rw/section/read/207927</a></li>
// <li><a href="https://www.britannica.com/topic/Swahili-language">https://www.britannica.com/topic/Swahili-language</a></li>
// <li>COLEMAN, BEVERLY E. “A HISTORY OF SWAHILI.” The Black Scholar, vol. 2, no. 6, 1971, pp. 13–25. JSTOR, <a href="www.jstor.org/stable/41163481.">www.jstor.org/stable/41163481.</a></li>
// </Container>
