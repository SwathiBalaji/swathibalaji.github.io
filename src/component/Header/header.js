import './header.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import menu from '../../images/menu.svg'
import icon from '../../images/icon.svg'

import { Row, Col, Image } from 'antd';

class Header extends Component {


    render() {
    return (
        <Col style={{ padding: "50px", position: "fixed"}}>
        <Row>
            <Image src={icon} preview={false}/>
        </Row>
        <Row><Image src={menu} style={{ width: "30px", marginTop: "25px"}} preview={false}/></Row>
        </Col>
    );
    }
};

export default Header;