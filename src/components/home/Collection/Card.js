import React from 'react'
import { Col } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Images = () => {
    return (
        <>
            <div className="d-flex py-1">
                <Col><img src="https://i.pinimg.com/736x/c3/04/49/c30449b8907449ff7bbe7d4b1382b43e.jpg" alt="main-collection-1" /></Col>
                <Col><img src="https://i.pinimg.com/736x/c3/04/49/c30449b8907449ff7bbe7d4b1382b43e.jpg" alt="main-collection-2" /></Col>
            </div>
            <div className="d-flex py-1">
                <Col><img src="https://i.pinimg.com/736x/c3/04/49/c30449b8907449ff7bbe7d4b1382b43e.jpg" alt="child-collection-1" /></Col>
                <Col><img src="https://i.pinimg.com/736x/c3/04/49/c30449b8907449ff7bbe7d4b1382b43e.jpg" alt="child-collection-2" /></Col>
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