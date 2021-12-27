import './home.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import AOS from 'aos'
import "aos/dist/aos.css";

import tabs from '../../images/home/tabs.png'
import terrarium from '../../images/home/terrarium.png'
import hnf from '../../images/home/hewandfrost.png'
import myntra from '../../images/home/myntra.png'



import circle from '../../images/home/circle.png'
import arrow from '../../images/home/arrow.png'
import myface from '../../images/home/myface.png'

AOS.init({
    duration: 80
});

class Home extends Component {

    render() {

        return (
            <div className='homebg'>
            <div className='home'>
                <div className='homepage'>
                    <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>

                    <Row style={{ paddingBottom: "140px" }}><Col style={{ padding: "50px", paddingLeft: "20%" }}>
                        <Row style={{ lineHeight: "320%" }}>Hello I am Swathi</Row>
                        <Row className='home-banner'>Welcome</Row>
                        <Row className='home-banner' style={{ paddingLeft: "400px" }}>to my</Row>
                        <Row style={{ fontSize: "120px", fontStyle: "italic", paddingLeft: "50px" }}>portfolio</Row>
                    </Col>
                        <Col style={{ marginTop: "40px" }}>
                            <Row><img src={circle} className='circle' alt='circle' width="120px"></img></Row>
                            <Row style={{ paddingLeft: "20px" }}><img src={arrow} alt='arrow' /></Row></Col>
                    </Row></div>



                <div className='projects' style={{ padding: "50px", display: "flex", alignContent: "center" }}>
                    <Col><Row>
                        <Col style={{ padding: "20px" }} ><Link to="/tabs">
                                <div class="container">
                                    <img className='image' src={tabs} alt='tabs'></img>
                                    <div class="overlay">
                                        <div class="text">Tabs</div>
                                    </div>
                                </div></Link></Col>

                        <Col style={{ padding: "20px" }} ><Link to="/terrarium">
                            <div class="container">
                                <img className='image' src={terrarium} alt='terrarium'></img>
                                <div class="overlay">
                                    <div class="text">Terrarium</div>
                                </div>
                            </div></Link></Col></Row>
                        <Row><Col style={{ padding: "20px" }}><Link to="/hewandfrost">
                            <div class="container">
                                <img className='image' src={hnf} alt='hew and frost'></img>
                                <div class="overlay">
                                    <div class="text">Hew and Frost</div>
                                </div>
                            </div></Link>
                        </Col>

                            <Col style={{ padding: "20px" }} ><Link to="/casestudy">
                                <div class="container">
                                    <img className='image' src={myntra} alt='ux case study'></img>
                                    <div class="overlay">
                                        <div class="text">UX Case Study</div>
                                    </div>
                                </div></Link>
                            </Col></Row></Col>

                </div>



                <Row className='aboutme'>
                    <Col data-aos="zoom-out"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic"><img src={myface} width="400px" alt='my face'></img></Col>
                    <Col style={{ width: "650px", paddingLeft: "50px" }}>
                        <Row><div className='title-text'>About me</div></Row>
                        <Row><div className='about-me'>I am a human-conscious and human-centric UI/UX
                            designer and developer. From resonating with the various visual indulgence present
                            in digital interfaces to studying the principles and curriculum behind good design-
                            my perspective as a creator is ever-evolving. UI/UX Design is the ideal intersection
                            of my interest in technology, my passion to help people, and my distinctive craftsmanship.
                            I have instilled in myself to be positive and approach any endeavor with all heart and
                            no doubt. My resourcefulness coupled with my academic and practical knowledge makes me
                            an ideal candidate for your program.</div></Row>
                    </Col>
                </Row>

            </div></div>
        );
    }
};

export default Home;