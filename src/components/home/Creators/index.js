import { Col, Row } from 'react-bootstrap'
import { Title } from '../../'
import Card from './Card'
import creators from '../../../data/creators'

export default function Creators() {
    return (
        <section id="creators">
            <div className="container">
                <Title topTitle="Creators" title="Trending Creators" />
                <Row>
                    {creators.map((creator, index) => {
                        return (
                            <Col key={index} md="6" lg="4" xl="3" className="mt-3"><Card creator={creator} /></Col>
                        )
                    })}
                </Row>
            </div>
        </section>
    )
}