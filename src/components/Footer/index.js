import { Row } from "react-bootstrap";
import Bottom from "./Bottom";
import Menus from "./Menus";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Row>
                    <Menus />
                    <SubscribeForm />
                    <Bottom />
                </Row>
            </div>
        </footer>
    )
}