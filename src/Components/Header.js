import React, { Component } from "react";
import { Nav,NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './images/logo1.png';

class Header extends Component{
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isActive:false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render(){
    return(
        <div>
                <nav className="navbar  navbar-expand-sm bg-primary">
                    <div className="container">
                      
                    <NavbarToggler onClick={this.toggleNav} style={{color:'white'}} />
                    <a className="navbar-brand mr-auto" href="https://divyaakula28.github.io/hotel/"><img src={logo} height="30" width="41" alt='logo'/></a>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'white',fontSize:'x-large'}} to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'white',fontSize:'x-large'}} to='/about'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:'white',fontSize:'x-large'}} to='/profile'> Profile</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>


                    </div>
                </nav>

        </div>
    )
    }
}
export default Header