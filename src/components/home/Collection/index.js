import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../'
import Card from './Card'

export default function Collection() {
    return (
        <section id="collection">
            <Container>
                <Title topTitle="Collection" title="Popular Collection" />
                <Row>
                    <Col md="6" lg="4" className="mt-4 mt-lg-0"><Card /></Col>
                    <Col md="6" lg="4" className="mt-4 mt-lg-0"><Card /></Col>
                    <Col md="6" lg="4" className="mt-4 mt-lg-0"><Card /></Col>
                </Row>
            </Container>
        </section>
    )
}