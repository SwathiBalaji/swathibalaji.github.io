
import React, { Component } from "react";

import myntra from '../../images/ux/myntra.png'
import zara from '../../images/ux/zara.png'
import impcomp from '../../images/ux/impcomp.png'
import wireframeux from '../../images/ux/wireframeux.png'
import redesignux from '../../images/ux/redesignux.png'
import divider from '../../images/divider.svg'
import AOS from 'aos'
import "aos/dist/aos.css";
import single from '../../images/single.png'

import 'antd/dist/antd.css';

import ProgressBar from "react-scroll-progress-bar";
import Header from '../Header/header';
import { Link } from 'react-router-dom';

AOS.init({
    duration: 80
});

class Casestudy extends Component {

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

                <div className='title'>UX Case Study - Myntra Site</div>

                <div className='banner'>                   
                    <img alt='single' src={single} style={{width: "30px"}}></img> 
                    <span style={{color: "green"}}>Personal Project</span> &nbsp; 
                    <span style={{color: "grey"}}>June 2019</span>  &nbsp; &#9679; &nbsp; 5 min read
                </div>

                <div className='things'>
                            For my research, I analyzed popular e-commerce portals like Amazon, Zara, Myntra, Nyka, Sephora, Flipkart, H&M, etc. In the Product List pages, there are too many or too few products in a row. In cases with 2 or 3 products in a row, the page has wide left and right margins. This is wasted real estate. In cases with 4+ products in a row, there is a high chance users do not see every product in the initial visit. Furthermore, in both cases, the user is forced to navigate out of the product list to a single product page- making the filters and sorting options in the Product List page redundant.
                            <img alt='zara' src={zara}/>

                            E-commerce platforms do not provide enough information for the user on the Product List page. Quick Views only show images and have little to no information about the product. The catalog of options is seldom curated at the start. Each product page does offer relevant options but the unlisted breadcrumb navigation through different windows can be difficult to trace back. Furthermore, switching through tabs takes the user out of the shopping zone. It can also affect the experience incase of extended load time.
                            <img alt='myntra' src={myntra}/>
                </div>

                <div><img src={divider} alt='divider' className='divider'/></div>

                <div className='things'>
                    <div className="sub-heading">Solution</div>
                    My approach to tackling these issues is to provide the user with the option to perform several actions on one page. After trying several layouts, I believe it would be ideal if a consolidated product page takes up the right half of the Product List page when I product is clicked.
                    Simultaneously, the list of products can be updated to align with the user’s needs. The product details component is collapsed once the user clicks on the product listing again. I begin by outlining the important components on the website of Myntra, a major Indian fashion e-commerce company.
                    <br/><br/>
                    <img src={impcomp} alt='important components'></img>
                    <br/><br/>
           
                    The goal of the redesign is to keep the integrity of the UX while offering a better experience. Next, I draw out the wireframe and create a basic skeletal interaction between the product card and the product tab. This helps to establish the feasibility of the redesign.
                    I implement the wireframe and redesign the website. The product tab offers product details like price, colors, delivery options, wish list options. Since all e-commerce platforms follow the same interaction model and wireframe, this UI redesign solution can be extended to all other e-commerce platforms.
                    <br/><br/>
                    <img src={wireframeux} alt='ux wireframe'></img>
                    <br/><br/>

                    I offer the product details in a scrollable tab as a form of extended quick view. By doing so, the Call to Action buttons is immediately available to the user. The number of steps to add to cart, to wish list a product, to apply filters, and to search and compare products- is lesser.
                    <br/><br/>
                    <img src={redesignux} alt='redesigned ux'></img>
                    <p style={{fontSize: "15px", fontStyle: "italic"}}>See below for a low-fidelity prototype. You can scroll on the Product details section</p>
                </div>

            <div>
                <div style={{textAlign: "center"}}><iframe title='UX Case Study' width="1500" height="550" src="https://xd.adobe.com/embed/73b453be-aef2-45fa-b6d7-8dbeb9ea2d10-26e7/" frameborder="0" allowfullscreen></iframe></div>
            </div>

            <div className='closerLook'>
                <br/>
                <span className='tags'>UX Research</span> 
                <span className='tags'>Case Study</span>    
                <span className='tags'>UI Redesign</span> 
            </div>

            <br/><br/>
            <div className='things'>
                See other projects<br/>
                <Link to='/hewandfrost'><span className='title' style={{fontSize: "35px"}}>Hew and Frost</span></Link>
                &nbsp; <span style={{fontSize: "25px"}}>&#9679;</span> &nbsp;<Link to='/tabs'><span className='title' style={{fontSize: "35px"}}>Tabs</span></Link>
                &nbsp; <span style={{fontSize: "25px"}}>&#9679;</span> &nbsp;<Link to='/terrarium'><span className='title' style={{fontSize: "35px"}}>Terrarium</span></Link>
            </div>
        </div>


        )
    };

}

export default Casestudy;