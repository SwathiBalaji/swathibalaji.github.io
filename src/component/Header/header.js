import './header.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import icon from '../../images/icon.svg'

import { Row, Col} from 'antd';

class Header extends Component {


    render() {
    return (
        <Row style={{ padding: "50px", position: "fixed", zIndex: "10000000000", width: "1600px"}}  className='actual-header'>
        <Col>
        <Row>
        <Link to="/"><img src={icon} alt='icon'/></Link>
        </Row>
        {/* <Row><Image src={menu} style={{ width: "30px", marginTop: "25px"}} preview={false}/></Row> */}
        </Col>
        <Col style={{ paddingLeft: "1000px" }} className='header-content-1'>About</Col>
        <Col style={{ paddingLeft: "50px" }} className='header-content-1'><Link to="/art">Art</Link></Col>
        </Row>
    );
    }
};

export default Header;