import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../index'

export default function Hero() {
    return (
        <section id="hero">
            <Container className="h-100">
                <Row className="text-center text-lg-start align-items-lg-center h-100">
                    <Col lg="7" className="content">
                        <h1>Explore The Best <span>NFT World</span></h1>
                        <p>Collect And Sell Your Extraordinary Artwork.</p>
                        <Button type="link" to="/explore" variant='primary'>Explore</Button>
                        <Button type="link" to="/upload" variant='outline-primary' className="ms-3">Upload</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}