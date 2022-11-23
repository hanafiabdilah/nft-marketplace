import { Col, Card } from 'react-bootstrap'

export default function WalletCard({ item }) {
    return (
        <Col xs="6" md="3" xl="2" className="mt-3">
            <Card className="wallet-card">
                <Card.Body>
                    <img src={item.image} alt={item.title} />
                    <h4 className="mt-3">{item.title}</h4>
                </Card.Body>
            </Card>
        </Col>
    )
}