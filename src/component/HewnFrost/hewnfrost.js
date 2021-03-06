
import React, { Component } from "react";
import {Image} from "antd"

import bannerhnf from '../../images/hnf/bannerhnf.png'

import it1 from '../../images/hnf/it1.png'
import it2 from '../../images/hnf/it2.png'
import it3 from '../../images/hnf/it3.png'
import team from '../../images/team.png'
import { Link } from 'react-router-dom';

import AOS from 'aos'
import "aos/dist/aos.css";

import 'antd/dist/antd.css';
import divider from '../../images/divider.svg'
import Header from '../Header/header';

import ProgressBar from "react-scroll-progress-bar";
import Footer from "../Footer/footer";

AOS.init({
    duration: 80
});

class Hewnfrost extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
    return (
            
        <div>
            <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
            <ProgressBar bgcolor="#303030" duration="2" height="5px" />

            <Header></Header>

            <img alt='hew and frost banner' src={bannerhnf} className="ui-img-ter"></img>
            <br/><br/>

            <div className='banner'> 
            <br/>           
                <div className="title">Hew and Frost - Web Design</div>   
                <span style={{padding: "10px", paddingLeft: "0px"}}><img alt='single' src={team} style={{width: "30px"}}></img></span>
                <span style={{color: "green"}}>Freelance Group Project</span> 
                &nbsp; <span style={{color: "grey"}}>August 2021</span> 
            </div>  

            <div className='things'>
                <br/>
                Hew and Frost is my first freelance project. The client wanted me to create an interface to cope with the growing demand for orders for their Instagram-based small business. Since there is a lack of consistency when communicating via WhatsApp, she wanted a portfolio website to place orders and showcase her desserts. She also wanted a blog and gallery to showcase her other creative interests. Since she had an already established brand, my first task was to align my planning and design to match her aesthetic. I looked through her mood boards, her dessert packaging, and her Instagram account to deduce the common themes they possessed. I was given the general wireframe as well. Before zeroing down on a theme, I posed my client with different options throughout each iteration. In cases where the client is not sure of the aesthetic, this iterative communication is very helpful. In my case, where my client had a vague idea- it helped me make important design decisions like dark or light theme, font styles, etc.

                <img src={divider} alt='divider' className='divider' />

                <div className="sub-heading">Choices</div>
                The first choice was a pastel, light-themed website.  It has curved edges, snap navigation, and soft shadows. Product images have pale pastel backgrounds.
                One common theme among bakery/dessert sites is elegant, chic, and luxurious UI. In those cases, cursive fonts, golden color palettes, and hard corners are predominantly used.
                This choice offered a contemporary twist to traditional English-themed bakery websites. I used hard borders, connecting lines, and contrasting colors to achieve this design. My main aim for the final product was to find a balance between luxurious and modern UI
                </div>
            
                <Image alt='item 1' src={it1} width="33.1vw"></Image>  
                <Image alt='item 2' src={it2} width="32.5vw"></Image>  
                <Image alt='item 3' src={it3} width="32.9vw"></Image>

            <img src={divider} alt='divider' className='divider' />

            <div className='things'>
            <div className="sub-heading">Final Result</div>
                The final UI was a perfect marriage of contemporary and rich UI with easing navigation. The homepage has a banner image that is present solely to highlight the distinctive artistic abilities of my client when it comes to cake making. Followed by that, the home page has other common components like About Me, Contact Me, FAQ, and Blogs. The homepage of the blog follows the skeletons of popular blogging sites like Medium and Blogger. The Portfolio page was the most exciting for me to design.
                I implemented the window-like mask to scrollable banner images. This has been growing in popularity among photography portfolio designs. It adds to the luxurious look and feel of the site. The Menu Page had a list of desserts designed to look like menu pamphlets. The Order Form, FAQ Page, etc. also followed a similar theme. It was rewarding to see the client appreciate the outcome. The site will be live by February, 22 to help grow her local business.
                
                <img src={divider} alt='divider' className='divider' />
                
                <div className="sub-heading" >Closer Look</div>
                <iframe title="hew and frost" src="https://drive.google.com/file/d/1dmBL1dQX49nu1xS0bv-Twi0OPiZP3Nhd/preview" width="640" height="400" allow="autoplay"></iframe> 
            </div>

            <div className='closerLook'>
                <br/>
                <span className='tags'>UX Research</span> 
                <span className='tags'>Freelance</span>    
                <span className='tags'>Web Redesign</span> 
            </div>

            <br/><br/>
            <div className='things'>
                See other projects<br/>
                <Link className='see-more' style={{color: "#F99DEA"}} to='/casestudy'>Case Study</Link>
                <Link className='see-more' style={{color: "#7E6DF7"}} to='/tabs'>Tabs</Link>
                <Link className='see-more' style={{color: "#5AC279"}} to='/terrarium'>Terrarium</Link>
            </div>

            <Footer></Footer>
        </div>

    );
    }

}
export default Hewnfrost