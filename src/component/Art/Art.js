import './Art.css'


import React, { Fragment, useEffect } from "react";
import kawai from '../../images/art/kawai.svg'
import avacado from '../../images/art/avacado.png'
import bri from '../../images/art/bri.svg'
import cup from '../../images/art/cupx.png'
import planet from '../../images/art/glass planet.png'
import gucci from '../../images/art/gucci.png'
import makeup from '../../images/art/makeupmockup2.png'
import sun from '../../images/art/sun.png'
import mountain from '../../images/art/mountain.png'
import pc from '../../images/art/plents on pc.svg'
import metro from '../../images/art/metro.png'
import room from '../../images/art/room.svg'
import puzzle from '../../images/art/puzzle.png'
import moonchild from '../../images/art/moon.svg'
import { Row, Col } from 'antd';

import AOS from 'aos'
import "aos/dist/aos.css";
import Text from 'antd/lib/typography/Text';
import Header from '../Header/Header';
const { useState } = React;

const dataset = [
    { image: kawai, text: "Kawai.", },
    { image: avacado, text: "Avacado.",  },
    { image: bri, text: "Identity:1", },
    { image: cup, text: "Aesthetic." },
    { image: planet, text: "Glass." },
    { image: gucci, text: "Perception." },
    { image: makeup, text: "Deconstruct." },
    { image: sun, text: "Sunrise." },
    { image: mountain, text: "Sunset." },
    { image: pc, text: "Identity:2" },
    { image: metro, text: "Travel." },
    { image: room, text: "Home." },
    { image: puzzle, text: "Puzzled." },
    { image: moonchild, text: "MoonChild." },
]

AOS.init({
    duration: 80
});
function Art() {
    return (
        <Fragment>
        <Header></Header>
        <Row>
        <Col className="art-content">
            <ImageGallery /></Col>
        </Row></Fragment>
    );
}

function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [textToShow, setTextToShow] = useState("");
    const [quoteToShow, setQuoteToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const imageCards = dataset.map((data) => (
        <span ><img style={{width: "150px"}} alt='card' className="image-card" onClick={() => showImage(data.image, data.text, data.quote)} src={data.image} /></span>
    ));

    const showImage = (image, text, quote) => {
        setImageToShow(image);
        setTextToShow(text);
        setQuoteToShow(quote);
        setLightBoxDisplay(true);
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    return (
        <div>
            <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
        
            <div>{imageCards}</div>

            {
                lightboxDisplay ?
                    <div id="lightbox" onClick={hideLightBox}>
                        <Row>
                            <span><img id="lightbox-img" alt='to show' src={imageToShow}></img></span>
                            
                            <Row className="art-title">{textToShow}</Row>
                            <Row className="art-quote"><Text>{quoteToShow}</Text></Row>
                            
                        </Row>
                    </div>
                    : ""
            }
        </div>
    );
}
export default Art;