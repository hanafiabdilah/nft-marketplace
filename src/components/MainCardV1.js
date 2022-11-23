import React from 'react';
import { ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


const Header = ({ item }) => {
    const [seconds, setSeconds] = React.useState(60);
    const [loved, setLoved] = React.useState(false);

    React.useEffect(() => {
        const timer =
            seconds > 0 ? setInterval(() => setSeconds(seconds - 1), 1000) : setSeconds(60);
        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <div className="header">
            <img src={item.image} alt={item.title} />
            <button onClick={() => setLoved(!loved)} className="love-box align-items-center justify-content-center">
                {loved ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <div className="live-box">
                <p className="text-center mb-0">15 Hrs : 20 Mins : {seconds} Sec</p>
                <ProgressBar variant="warning" now={60} style={{ height: '5px' }} className="mt-2" />
            </div>
        </div>
    )
}

const Body = ({ item }) => {
    return (
        <div className="body">
            <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="title mb-0">{item.title}</h4>
                <Link to="/art" className="category">Art</Link>
            </div>
            <div className="mb-1">
                <small>Price:-</small>
                <h4 className="mb-0">4.20 ETH<span>( USD 20.35 )</span></h4>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <small>Created By</small>
                    <h5>@sanya</h5>
                </div>
                <div className="text-end">
                    <small>Owner</small>
                    <h5>@vijaypatil</h5>
                </div>
            </div>
            <button className="bid-button">Place Bid</button>
        </div>
    )
}

export default function CardV1({ item }) {
    return (
        <div className="main-card v1">
            <Header item={item} />
            <Body item={item} />
        </div>
    )
}