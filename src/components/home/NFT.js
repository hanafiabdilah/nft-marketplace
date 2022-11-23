import { Col, Row } from "react-bootstrap";
import { Title, MainCardV2 } from "../";
import nfts from '../../data/nfts'

export default function NFT() {
    return (
        <section id="nft">
            <div className="container">
                <Title topTitle="Trending" title="Trendings NFT's" />
                <Row>
                    {nfts.map((item, index) => {
                        return (
                            <Col key={index} md="6" lg="4" xl="3" className="mt-4 mt-xl-0"><MainCardV2 item={item} /></Col>
                        )
                    })}
                </Row>
            </div>
        </section>
    )
}