export default function Title({ topTitle, title }) {
    return (
        <div className="title">
            <h3 className="top-title"><div></div>{topTitle}</h3>
            <h2>{title}</h2>
        </div>
    )
}