import { Link } from '../../routes'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    } from 'reactstrap';

import auth0 from '../../services/auth0'

const BsNavLink = (props) => {
    const { route, title } = props
    return (
        <NavItem className="port-navbar-item">
            <Link href={ route }><a className="nav-link port-navbar-link">{ title }</a></Link>
        </NavItem>
    )
}

const Login = () => {
    return (
        <NavItem className="port-navbar-item">
            <a className="nav-link port-navbar-link clickable" onClick={ auth0.login }>LOGIN</a>
        </NavItem>
    )
}

const Logout = () => {
    return (
        <NavItem className="port-navbar-item">
            <a className="nav-link port-navbar-link clickable" onClick={ auth0.logout }>LOGOUT</a>
        </NavItem>
    )
}

class Header extends React.Component{  
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);        
        this.state = {
          collapsed: false
        };
    }  

    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    renderAuthenticationBtn(isAuthenticated, user) {        
        if(!isAuthenticated){
            return <Login />
        }else{
            return (
                <React.Fragment>
                    <Logout />
                    <NavItem className="port-navbar-item">
                        <span className="nav-link port-navbar-link">{ user.name }</span>
                    </NavItem>
                </React.Fragment>
            )
        }
    }

    render() {        
        const { isAuthenticated, user } = this.props;                
        return (        
            <React.Fragment>
                <Navbar color="transparent" dark expand="md" className="port-navbar port-default absolute">
                    <NavbarBrand className="port-navbar-brand" href="/">Songklod S.</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <BsNavLink title="Home" route="/"/>
                            <BsNavLink title="About" route="/about"/>
                            <BsNavLink title="Blog" route="/blog"/>
                            <BsNavLink title="Portfolio" route="/portfolios"/>
                            <BsNavLink title="CV" route="/cv"/>
                            { this.renderAuthenticationBtn(isAuthenticated, user) }
                        </Nav>
                    </Collapse>
                </Navbar>                                            
            </React.Fragment>
        )
    }
}

export default Header