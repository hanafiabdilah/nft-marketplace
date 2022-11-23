import { Row, Col } from 'react-bootstrap'
import { Title } from '../../'
import Card from './Card';
import steps from '../../../data/steps'

export default function Steps() {
    return (
        <section id="steps">
            <div className="container">
                <Title topTitle="Steps For Sell & Buy" title="Easy Steps To Create And Sell Your NFT" />
                <Row>
                    {steps.map((item, index) => {
                        return (
                            <Col key={index} md="6" lg="4" xl="3" className="mt-4 mt-xl-0"><Card item={item} /></Col>
                        )
                    })}
                </Row>
            </div>
        </section>
    )
}