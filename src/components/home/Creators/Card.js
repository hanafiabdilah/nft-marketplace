import { HiOutlineBadgeCheck } from 'react-icons/hi'

export default function Card({ creator }) {
    return (
        <div className="card-creator">
            <div className="d-flex align-items-center">
                <img src={creator.image} alt={creator.name} />
                <div className="ms-3">
                    <div className="d-flex align-items-center mb-2">
                        <h4 className="mb-0">@{creator.name}</h4>
                        <HiOutlineBadgeCheck className="ms-2" />
                    </div>
                    <h6 className="mb-0">ETH-{creator.eth}</h6>
                </div>
            </div>
        </div>
    )
}