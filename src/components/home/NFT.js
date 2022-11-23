import { Col, Row } from "react-bootstrap";
import { Title, MainCardV2, Button } from "../";
import nfts from '../../data/nfts'

export default function NFT() {
    const filterButtons = ['All', 'Art', '3D Art', 'Game', 'Painting', 'Wall Art']
    return (
        <section id="nft">
            <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                    <Title topTitle="Trending" title="Trendings NFT's" />
                    <div className="filter mt-3 mt-lg-0">
                        {filterButtons.map((item, index) => {
                            return (
                                <button key={index}>{item}</button>
                            )
                        })}
                    </div>
                </div>
                <Row>
                    {nfts.map((item, index) => {
                        return (
                            <Col key={index} md="6" lg="4" xl="3" className="mt-4 mt-xl-0"><MainCardV2 item={item} /></Col>
                        )
                    })}
                </Row>
                <div className="text-center mt-5">
                    <Button type="link" to="/nfts" variant="outline-primary">Explore More</Button>
                </div>
            </div>
        </section>
    )
}