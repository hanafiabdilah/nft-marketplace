import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import footerMenus from "../../data/footerMenus";

const Links = ({ links }) => {
    return (
        <ul>
            {links.map((menu, index) => {
                return (
                    <li key={index}><Link to={menu.to}>{menu.title}</Link></li>
                )
            })}
        </ul>
    )
}

export default function Menus() {
    return (
        <Col lg="9" className="menus">
            <Row>
                {footerMenus.map((menu, index) => {
                    return (
                        <Col key={index} md="4" lg="3" className="mt-2 mt-lg-0">
                            <h4>{menu.title}</h4>
                            <Links links={menu.links} />
                        </Col>
                    )
                })}
            </Row>
        </Col>
    )
}