import { Col, FormControl } from 'react-bootstrap'
import Button from "../Button";

export default function SubscribeForm() {
    return (
        <Col lg="3" className="subscription">
            <h4 className="mb-4">Be Updated With Us</h4>
            <FormControl placeholder="Enter Your Email" className="subscribe-form mb-3" />
            <Button variant="primary" className="w-100">Subsribe</Button>
        </Col>
    )
}