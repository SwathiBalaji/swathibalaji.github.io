import './footer.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd';

class Footer extends Component {


    render() {
        return (
            <div>
                <br/><br/><br/>
            <Row className='footer'>
                <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
                <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                <Col flex="550px" className='footer-name'>
                    <Link to="/">swathi balaji</Link>
                </Col>

                <Col className='link'><a href='https://www.instagram.com/swathi.ui/' target="_blank" rel="noreferrer">Instagram</a></Col>
                <Col className='link'><a href='https://www.linkedin.com/in/swathibalaji963/' target="_blank" rel="noreferrer">LinkedIn</a></Col>
                <Col className='link'><a href='https://medium.com/@swathi963' target="_blank" rel="noreferrer">Medium</a></Col>
                <Col className='link'><a href='https://dribbble.com/bri_pearl' target="_blank" rel="noreferrer">Dribbble</a></Col>
            </Row></div>
        );
    }
};

export default Footer;