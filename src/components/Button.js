import { Link } from "react-router-dom";

export default function Button({ type, to, variant = 'primary', className = '', children }) {
    if (type === 'link') {
        return (
            <Link href="" to={to} className={`button button-${variant} ${className}`}>{children}</Link>
        )
    }

    return (
        <button className={`button button-${variant} ${className}`}>{children}</button>
    )
}