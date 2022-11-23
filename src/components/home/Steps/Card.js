export default function Card({ item }) {
    return (
        <div className="card-step">
            <div className="icon-box mb-3">
                <div className="d-flex align-items-center justify-content-center h-100">
                    {item.icon}
                </div>
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </div>
    )
}