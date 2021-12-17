import './home.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Row, Col} from 'antd';

class Home extends Component {

    
    render() {
    return (
        <Col style={{ padding: "250px"}}>
        <Row><Link to="/art">Art</Link></Row>

        <Row><Link to="/tabs">Tabs</Link></Row>

        <Row><Link to="/terrarium">Terrarium</Link></Row>
        </Col>
    );
    }
};

export default Home;