import React from 'react'
import { Col } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Images = () => {
    return (
        <>
            <div className="d-flex py-1">
                <Col><img src="https://i.pinimg.com/736x/c3/04/49/c30449b8907449ff7bbe7d4b1382b43e.jpg" alt="main-collection-1" /></Col>
                <Col><img src="https://www.nrn.com/sites/nrn.com/files/chefpizza_0.jpg" alt="main-collection-2" /></Col>
            </div>
            <div className="d-flex py-1">
                <Col><img src="https://public.nftstatic.com/static/nft/zipped/146c1eb4b0824bf5a046dd7caf2571d4_zipped.jpeg" alt="child-collection-1" /></Col>
                <Col><img src="https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485" alt="child-collection-2" /></Col>
                <Col><img src="https://i.pinimg.com/736x/c3/04/49/c30449b8907449ff7bbe7d4b1382b43e.jpg" alt="child-collection-3" /></Col>
            </div>
        </>
    )
}

export default function Card() {
    const [loved, setLoved] = React.useState(false);

    return (
        <div className="card-collection">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="user">
                    <div className="d-flex align-items-center">
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="user-collection" />
                        <div className="ms-2">
                            <h4>Art Collection</h4>
                            <h6 className="mb-0"><span>Created By-</span> @hanafi_abd</h6>
                        </div>
                    </div>
                </div>
                <button className="love" onClick={() => setLoved(!loved)}>
                    {loved ? <AiFillHeart size="1.3em" /> : <AiOutlineHeart size="1.3em" />}
                </button>
            </div>
            <Images />
        </div>
    )
}