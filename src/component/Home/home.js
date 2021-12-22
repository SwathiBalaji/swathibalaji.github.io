import './home.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Row, Col} from 'antd';

import homeArrow from '../../images/home/home-arrow.png'
import hori from '../../images/home/hori.png'
import tabs from '../../images/home/header-tabs.png'
import hnf from '../../images/home/header-hnf.png'
import ter from '../../images/home/ter-tabs.png'
import ux from '../../images/home/ux-header.png'

class Home extends Component {

    
    render() {
        
    return (
        <div>
            <link href="http://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet"></link>
            <style>
                            @import url('http://fonts.cdnfonts.com/css/monument-extended');
</style>
                
                
            
            <div style={{ padding: "150px", paddingBottom: "0px", paddingLeft: "250px"}} className='title-home'>Hello, I am Swathi</div>
            <Row style={{paddingLeft: "1050px"}}>
                <Col><img src={homeArrow} alt='home arrow' width="100px"></img></Col>
                <Col className='sub-title-home'><span style={{padding: "15px"}}>UI/UX Desginer</span> <br/> <span style={{padding: "15px"}}>Developer</span> <br/> <span style={{padding: "15px"}}>Creative</span></Col>
            </Row>
            <br/><br/><br/>
            <div className='socials'>
                <Row>
                    <Col><img alt='horizontal line' src={hori}></img></Col>
                    <Col>Instagram</Col>
                    <Col style={{paddingLeft: "50px"}}>LinkedIn</Col>
                    <Col style={{paddingLeft: "50px"}}>Dribbble</Col>
                    <Col style={{paddingLeft: "50px"}}>Medium</Col>
                </Row>
            </div>
        <Col>
        <Row style={{ padding: "250px", paddingBottom: "0px", paddingTop: "300px"}}>
        <Col><Link to="/tabs"><img alt='tabs' className='projects' height="290px" src={tabs}></img></Link></Col>
        <Col><img alt='hew and frost' className='projects' height="290px" src={hnf}></img></Col></Row>

        <Row style={{paddingLeft: "250px"}}>
        <Col><Link to="/terrarium"><img alt='terrarium' className='projects' height="376px" src={ter}></img></Link></Col>
        <Col><img alt='ux' className='projects' height="376px" src={ux}></img></Col></Row>
        </Col>
        <Row><Link to="/tabs">Tabs</Link></Row>

        <Row><Link to="/terrarium">Terrarium</Link></Row>
        </div>
    );
    }
};

export default Home;