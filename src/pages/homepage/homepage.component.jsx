import React from 'react';

import './homepage.styles.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const HomePage = () => (
    <Row>
        <Col sm='12' md='8' lg='8'>
            <div className="ss-centered">
                <h1>SPACESHARE</h1>
                <h2 className="ss-tagline"> 
                    Create Space. Invite People. Share Stuff. 
                </h2>
                <div className="ss-form">
                    <input className="form-control ss-text-input" type="text" placeholder="Enter Space Name"></input>
                    <Button className="ss-submit-btn" variant="outline-primary">CREATE or JOIN</Button>
                </div>
            </div>    
        </Col>
    </Row>
);

export default HomePage;