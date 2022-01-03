import './home.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import icon from '../../images/header/logo.png'
import AOS from 'aos'
import "aos/dist/aos.css";

import coverimg from '../../images/home/coverimg.png'
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import instagram from '../../images/home/instagram.png'
import medium from '../../images/home/medium.png'
import linkedin from '../../images/home/linkedin.png'

import myface from '../../images/home/myface.png'


AOS.init({
    duration: 80
});

class Home extends Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    }

    render() {

        return (
            <div className='homepage'>
                <ReactFullpage
                    licenseKey={"YOUR_LICENSE_KEY"}
                    scrollOverflow={true}
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={({ state, fullpageApi }) => {
                        return (
                            <div id="fullpage-wrapper">
                                <div className="section section1">
                                <Row style={{ width: "98.9vw", transform: "translateY(-120px)" }} className='header'>
                <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
                <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                <Col flex="1250px" style={{paddingLeft: "50px"}}>
                    <Link to="/"><img src={icon} style={{transform: "translateY(-20px)"}} width="40px"alt='icon' /></Link>
                </Col>

                <Col flex="100px" className='art'><Link to="/art">art</Link></Col>

                <Col flex="auto" className='art'><a href='https://drive.google.com/file/d/1vYEwVdYfdsYyMQSMqbjYKd7dbxkWeeoE/view?usp=sharing' target="_blank" rel="noreferrer">cv</a></Col>
            </Row>
                                    <img className='image' src={coverimg} alt='cover' ></img>
                                    <div className='subheading-home'>Hello, I am Swathi</div>
                                </div>

                                <div className="section section2">
                                    <div className='projects'>
                                        <span className='heading-home'>Tabs</span>
                                        <span> is a social media app that focuses on delivering customized news from all over the world.</span>
                                        <br/><br/>
                                        <Link to="/tabs"><div className='button-tabs'>See More</div>
                                        </Link>
                                    </div>


                                </div>
                                <div className="section section3">

                                    <div className='projects'>
                                        <span className='heading-home'>Hew & Frost</span>
                                        <span>  is my first freelance project that was created to cope with the growing demand for orders for their Instagram-based small business.</span>
                                        <br /><br />
                                        <Link to="/hewandfrost"><div className='button-hnf'>See More</div>
                                        </Link>
                                    </div>

                                </div>
                                <div className="section section4">
                                    <div className='projects'>

                                        <span className='heading-home'>Case Study</span>
                                        <span> is a UX case study that analyses existing e-commerce product list and product page and offers an effective re-design.</span>
                                        <br /><br />
                                        <Link to="/casestudy"><div className='button-ux'>See More</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="section section5">
                                    <div className='projects'>

                                        <span className='heading-home'>Terrarium</span>
                                        <span> is a mobile-based AR application that provides an immersive simulation of a portable plant nurturing experience.</span>
                                        <br /><br />
                                        <Link to="/terrarium"><div className='button-ter'>See More</div>
                                        </Link>
                                    </div>

                                </div>
                                <div className="section section6">
                                   

                                        <Row className='aboutme'><Col><img alt='face' src={myface}  style={{"animation": "none"}} className='image' width="250px"></img></Col>
                                        <Col style={{width: "600px", padding: "50px", paddingRight: "0px"}}>I am a human-conscious and human-centric UI/UX designer and developer. From resonating with the various visual indulgence present in digital interfaces to studying the principles and curriculum behind good design- my perspective as a creator is ever-evolving. UI/UX Design is the ideal intersection of my interest in technology, my passion to help people, and my distinctive craftsmanship. I have instilled in myself to be positive and approach any endeavor with all heart and no doubt. My resourcefulness coupled with my academic and practical knowledge makes me an ideal candidate for your program.</Col>
                                        <Col className='socials'>
                                        <Row style={{padding: "10px"}}><img alt='ig' width="30px" src={instagram}/></Row>
                                        <Row style={{padding: "10px"}}><img alt='linkedIn' width="30px" src={linkedin}/></Row>
                                        <Row style={{padding: "10px"}}><img alt='medium' width="30px" src={medium}/></Row>
                                        <Row style={{borderRight: "1px solid black", height: "200px", width: "30px"}}></Row></Col>
                                        </Row>
                                        
                                        <div>
                                        <div className='go-top' onClick={() => fullpageApi.moveTo(1, 0)}>Go to top</div>
                                    </div>

                                </div>
                            </div>
                        );
                    }}
                />

            </div>
        );
    }
};

export default Home;