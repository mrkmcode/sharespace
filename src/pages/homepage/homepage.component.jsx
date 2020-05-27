import React, { Component } from 'react';

import './homepage.styles.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = { peerId : '' }
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const { peerId } = this.state;
        const { joinSpace } = this.props;

        joinSpace(peerId);
        this.setState({peerId: ''});
    }

    render = () => (
        <Row>
            <Col sm='12' md='8' lg='8'>
                <div className="ss-centered">
                    <h1>SHARESPACE</h1>
                    <h2 className="ss-tagline"> 
                        Create Space. Invite People. Share Stuff. 
                    </h2>
                    <div className="ss-form">
                        <input className="form-control ss-text-input" type="text" placeholder="Enter Space Name" value={this.state.peerId} onChange={(e) => { this.setState({peerId: e.target.value}); }}></input>
                        <Button className="ss-submit-btn" variant="outline-primary" onClick={(e) => {this.onSubmit(e);}}>JOIN</Button>
                    </div>
                    <p style={{ marginTop : "1rem", color : "#ffffff" }}>OR</p>
                    <div className="ss-form">
                        <Button className="ss-submit-btn" variant="outline-primary" onClick={this.props.createSpace}>CREATE</Button>
                    </div>
                </div>    
            </Col>
        </Row>
    );
} 

export default HomePage;