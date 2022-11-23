import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Header = ({ item }) => {
    const [loved, setLoved] = React.useState(false);

    return (
        <div className="header mb-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="users d-flex align-items-center">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user" />
                        <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=638" alt="user" />
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80" alt="user" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOB84LLmkJh3CK_3rZ_BrH5N-7Ir6SrnLJqnI-MOpKXgA3Ws1ZhwDgIiT0Pulwr439TY&usqp=CAU" alt="user" />
                        <img src="https://www.freecodecamp.org/news/content/images/2022/01/IMG_1763.jpg" alt="user" />
                    </div>
                    <h5 className="mb-0 ms-1"><span>+5</span></h5>
                </div>
                <h5 className="mb-0"><span>Owner - </span>@hanafiabdilah</h5>
            </div>
            <div className="image">
                <img src={item.image} alt={item.title} />
                <button onClick={() => setLoved(!loved)} className="love-box align-items-center justify-content-center">
                    {loved ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
            </div>
        </div >
    )
}

const Body = ({ item }) => {
    const [seconds, setSeconds] = React.useState(10);

    React.useEffect(() => {
        const timer =
            seconds > 0 ? setInterval(() => setSeconds(seconds - 1), 1000) : setSeconds(60);
        return () => clearInterval(timer);
    }, [seconds]);

    const Countdown = () => {
        return (
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <h5 className="mb-0">03</h5>
                    <h6 className="mb-0">Hrs</h6>
                </div>
                <div className="d-flex flex-column align-items-center ms-2">
                    <h5 className="mb-0">20</h5>
                    <h6 className="mb-0">Mins</h6>
                </div>
                <div className="d-flex flex-column align-items-center ms-2">
                    <h5 className="mb-0">{('0' + seconds).slice(-2)}</h5>
                    <h6 className="mb-0">Sec</h6>
                </div>
            </div>
        )
    }

    return (
        <div className="body">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <h5 className="mb-1">Current Bid-</h5>
                    <h4 className="mb-0">4.20 ETH <span>( USD 20.35 )</span></h4>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <h6 className="mb-0">Auction Ends In</h6>
                    <Countdown />
                </div>
            </div>
            <button className="bid-button w-100">Place Bid</button>
        </div >
    )
}

export default function MainCardV2({ item }) {
    return (
        <div className="main-card v2">
            <Header item={item} />
            <Body item={item} />
        </div>
    )
}