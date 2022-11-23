import WalletCard from "./WalletCard";
import { Container, Row } from "react-bootstrap";
import { Title } from "../../index";
import wallets from '../../../data/wallets';

export default function Wallets() {
    return (
        <section id="wallets">
            <Container>
                <Title topTitle="Wallet" title="Wallets We Support" />
                <Row>
                    {wallets.map((item, index) => {
                        return (
                            <WalletCard key={index} item={item} />
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}