import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
// import SendNotification from './sendNotification';
import Companies from './companies';
import Students from './students';

export default class AdminDeshboard extends React.Component {
    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">View Students</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">View Companies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Send Notification</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Students />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Companies />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                {/* <SendNotification /> */}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}