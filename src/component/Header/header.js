import './Header.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import icon from '../../images/header/logo.png'

import { Row, Col } from 'antd';

class Header extends Component {


    render() {
        return (
            <Row style={{ width: "98.9vw", paddingTop: "30px" }} className='header'>
                <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
                <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                <Col flex="1250px" style={{paddingLeft: "50px"}}>
                    <Link to="/"><img src={icon} style={{transform: "translateY(-5px)", width: "40px"}} alt='icon' /></Link>
                </Col>

                <Col flex="100px" className='art'><Link to="/art">art</Link></Col>

                <Col flex="auto" className='art'><a href='https://drive.google.com/file/d/1vYEwVdYfdsYyMQSMqbjYKd7dbxkWeeoE/view?usp=sharing' target="_blank" rel="noreferrer">cv</a></Col>
            </Row>
        );
    }
};

export default Header;