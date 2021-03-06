import './home.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import AOS from 'aos'
import "aos/dist/aos.css";

import coverimg from '../../images/home/homepage-banner.png'
import tabs from '../../images/home/tabs.png'
import ux from '../../images/home/case-study.png'
import hnf from '../../images/home/hnf.png'
import terrarium from '../../images/home/terrarium.png'
import instagram from '../../images/home/instagram.png'
import medium from '../../images/home/medium.png'
import linkedin from '../../images/home/linkedin.png'

import myface from '../../images/home/myface.png'
import Footer from '../Footer/footer';

AOS.init({
    duration: 800
});

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <Row style={{ width: "98vw", height: "100vh", justifyContent: "center", alignItems: "center" }}>
                    <Col style={{ width: "49vw" }} >
                        <div style={{ width: "30vw", justifyContent: "center", marginRight: "auto", marginLeft: "auto" }}><span className='title'>Hello, I am Swathi</span><br />
                            <span className='sub-heading'>I am a UI/UX designer and Frontend developer</span><br /><br />
                            <span className='sub-heading-banner'>
                                <a href="#projects" style={{ color: "#5AC279" }}>projects</a>&nbsp;
                                <Link to="/art" style={{ color: "#FB3302" }}>art</Link>&nbsp; 
                                <a href='https://drive.google.com/file/d/1Ew1AscPC-4n6OgzMJcxyNK2YaLOq-D6n/view?usp=sharing' target="_blank" rel="noreferrer" style={{ color: "#3154E4" }}>resume</a>&nbsp;
                                <a href='#aboutme' style={{ color: "#F99DEA" }}>about</a>&nbsp;

                            </span></div>
                    </Col>
                    <Col style={{ width: "49vw" }}><img src={coverimg} alt='cover'></img></Col>
                </Row>
                <div className='homepage'>

                    <div id='projects'>
                        <br /><br />

                        <br />
                        <Row className='project-row'>
                            <Col className='project-col' style={{ marginBottom: "3vw" }}>
                            <Link to="/casestudy" className='projects-header'>UX Case Study</Link>
                                <div className='projects-text'>This is a UX case study to enhance an existing e-commerce system Product Page. I analyze popular e-commerce portals and provide a re-design of Myntra Pages using Adobe XD. I also conduct A/B testing in my peer group.</div>
                                <br/>
                                <img className='project-img' alt='ux case study' src={ux}></img>
                                </Col>
                            <Col>
                                <Row className='project-row-sub'>
                                    <img className='project-img' alt='tabs' src={tabs}></img>
                                    <Link to="/tabs" className='projects-header'>Tabs - a social news network</Link>
                                    <div className='projects-text'>Tabs is a social media app that focuses on delivering customized news from worldwide.</div>
                                </Row>

                                <Row className='project-row-sub' >
                                    <img className='project-img' alt='terrarium' src={terrarium}></img>
                                    <Link to="/terrarium" className='projects-header'>Terrarium - Portable Garden</Link>
                                    <div className='projects-text'>Terrarium is a mobile-based AR application that provides an immersive simulation of a portable plant nurturing experience. My two-person team developed Terrarium for an ed-tech startup called Cambrionics.</div>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='project-row'>
                            <img src={hnf} alt='hew and frost' className='project-img-hnf'></img>
                            <Link to="/hewandfrost" className='projects-header'>Hew and Frost - Web Design</Link>
                            <div className='projects-text'>Hew and Frost is my first freelance project created to cope with the growing demand for orders for an Instagram-based small business.</div></Row>

                        <div>

                        </div>
                    </div>
                </div>

                <div><Row id='aboutme'>
                    <Col className='aboutme-img'><img alt='face' src={myface} ></img></Col>
                    <Col className='aboutme-text'>I am a human-conscious and human-centric UI/UX designer and developer. From resonating with the various visual indulgence present in digital interfaces to studying the principles and curriculum behind good design- my perspective as a creator is ever-evolving. UI/UX Design is the ideal intersection of my interest in technology, passion for helping people, and distinctive craftsmanship. I have instilled in myself to be positive and approach any endeavor with all heart and no doubt.</Col>
                    <Col className='socials'>
                        <Row className='aboutme-socials'><a href='https://www.instagram.com/swathi.ui/' target="_blank" rel="noreferrer"><img alt='ig' style={{ width: "30px" }} src={instagram} /></a></Row>
                        <Row className='aboutme-socials'><a href='https://www.linkedin.com/in/swathibalaji963/' target="_blank" rel="noreferrer"><img alt='linkedIn' style={{ width: "30px" }} src={linkedin} /></a></Row>
                        <Row className='aboutme-socials'><a href='https://medium.com/@swathi963' target="_blank" rel="noreferrer"><img alt='medium' style={{ width: "30px" }} src={medium} /></a></Row>
                        <Row className='aboutme-line' style={{ borderRight: "1px solid black", height: "200px", width: "30px" }}></Row>
                    </Col>
                </Row></div>
                <Footer></Footer>
            </div>
        );
    }
};

export default Home;