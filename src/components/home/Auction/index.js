import { Col, Row } from "react-bootstrap";
import { MainCardV1, Title } from "../../index";
import auctions from "../../../data/auctions";

export default function Auction() {
    return (
        <section id="auction">
            <div className="container">
                <Title topTitle="Live Auction" title="Trending Auctions" />
                <Row>
                    {auctions.map((item, index) => {
                        return (
                            <Col key={index} md="6" lg="4" xl="3" className="mt-4 mt-xl-0"><MainCardV1 item={item} /></Col>
                        )
                    })}
                </Row>
            </div>
        </section>
    )
}