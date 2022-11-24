import { Navbar as NavbarBS, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button } from '.'
import logo from '../assets/images/logo.png'
import navMenus from '../data/navMenus'

export default function Navbar() {
    return (
        <NavbarBS variant="dark" expand="lg" fixed="top">
            <Container>
                <NavbarBS.Brand href="/">
                    <img src={logo} alt="nft-marketplace-logo" height="50" />
                </NavbarBS.Brand>
                <NavbarBS.Toggle />
                <NavbarBS.Collapse >
                    <Nav className="ms-auto align-items-center">
                        {navMenus.map(menu => {
                            return (
                                <Link key={menu.title} to={menu.to} className="nav-link mx-2">{menu.title}</Link>
                            )
                        })}
                        <Button to="" type="link" className="py-1 ms-4 my-3 my-lg-0">Connect Wallet</Button>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    )
}