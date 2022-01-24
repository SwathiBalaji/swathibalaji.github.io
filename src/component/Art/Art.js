import './Art.css'


import React, { useState, useCallback } from "react";
import kawai from '../../images/art/kawai.svg'
import avacado from '../../images/art/avacado.png'
import bri from '../../images/art/bri.png'
import cup from '../../images/art/cupx.png'
import planet from '../../images/art/glass planet.png'
import gucci from '../../images/art/gucci.png'
import makeup from '../../images/art/makeupmockup2.png'
import sun from '../../images/art/sun.png'
import mountain from '../../images/art/mountain.png'
import pc from '../../images/art/plents on pc.png'
import metro from '../../images/art/metro.png'
import room from '../../images/art/room.png'
import puzzle from '../../images/art/puzzle.png'
import moonchild from '../../images/art/moonchild.png'
import clay from '../../images/art/clay.png'
import makeupiso from '../../images/art/makeupiso.png'
import murakami from '../../images/art/murakami.png'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import AOS from 'aos'
import "aos/dist/aos.css";
import Header from '../Header/header';

const photos = [
    {
        src: cup,
        width: 4,
        height: 3
      },

    {
      src: avacado,
      width: 4,
      height: 3
    },
    {
        src: kawai,
        width: 4,
        height: 3,
      },
    {
      src: bri,
      width: 4,
      height: 3
    },
    {
        src: gucci,
        width: 4,
        height: 3.8
      },
    {
        src: makeup,
        width: 4,
        height: 3.2
      },
      {
        src: sun,
        width: 4,
        height: 5.2
      },
    {
      src: planet,
      width: 4,
      height: 3.8
    },
    
    {
        src: puzzle,
        width: 4,
        height: 5
      },
      {
        src: moonchild,
        width: 3.5,
        height: 2.2
      },
    {
      src: mountain,
      width: 4,
      height: 5.2
    },
    {
      src: pc,
      width: 4,
      height: 3
    },
    {
      src: metro,
      width: 3.2,
      height: 6
    }, 
    {
      src: room,
      width: 4,
      height: 2.5
    },
    {
        src: clay,
        width: 4,
        height: 3
      },
      {
        src: makeupiso,
        width: 3,
        height: 2
      }, 
      {
        src: murakami,
        width: 4,
        height: 3
      },
  ];
  

AOS.init({
    duration: 80
});
function Art() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    }
    return (
        <div><Header></Header>
        <div className='arts' style={{width: "70%"}}>
      <Gallery direction={"column"} photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    </div>
    );
}

export default Art;