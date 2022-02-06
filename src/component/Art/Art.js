import './Art.css'


import React from "react";
import kawai from '../../images/art/kawai.svg'
import avacado from '../../images/art/avacado.png'
import bri from '../../images/art/bri.png'
import cup from '../../images/art/cupx.png'
import planet from '../../images/art/planet.png'
import gucci from '../../images/art/gucci.png'
import makeup from '../../images/art/makeupmockup2.png'
import sunmoon from '../../images/art/sunmoon.png'
import pc from '../../images/art/plents on pc.png'
import metro from '../../images/art/metro.png'
import room from '../../images/art/room.png'
import puzzle from '../../images/art/puzzle.png'
import moonchild from '../../images/art/moonchild.png'
import sd from '../../images/art/springDay.png'
import clay from '../../images/art/clay.png'
import makeupiso from '../../images/art/makeupiso.png'
import murakami from '../../images/art/murakami.png'
import mosstoggle from '../../images/art/mosstoggle.png'
import farm from '../../images/art/farm.png'
import pot from '../../images/art/potted plant.png'


import aquarium from '../../images/art/photography/aquarium.png'
import artgal from '../../images/art/photography/artgal.png'
import flowers from '../../images/art/photography/flowers.png'
import metrotrain from '../../images/art/photography/metro.png'
import tiles from '../../images/art/photography/tiles.png'


import AOS from 'aos'
import "aos/dist/aos.css";
import Header from '../Header/header';
import { Tabs, Image, Row, Col } from 'antd';

const { TabPane } = Tabs;

AOS.init({
  duration: 80
});
function Art() {

  return (
    <div>
      <Header></Header>
      <div className='arts' style={{ width: "70vw" }}>
        <Tabs style={{ textAlign: "center" }} centered>
          <TabPane style={{ textAlign: "center" }} tab="Yoni Linga" key="1">
            <Image src={sunmoon} />
            <Image src={sd} />
          </TabPane>

          <TabPane style={{ textAlign: "center" }} tab="Sand & Glass" key="2">
            <Row><Col style={{ width: "50%" }}><Image src={makeup} /></Col>
              <Col style={{ width: "50%" }}><Image src={planet} /></Col></Row>

            <Row><Col style={{ width: "50%" }}><Image src={bri} /></Col>
              <Col style={{ width: "50%" }}><Image src={makeupiso} /></Col></Row>
          </TabPane>

          <TabPane tab="Purples" key="3">
            <Row><Col style={{ width: "50%" }}><Image src={room} /></Col>
              <Col style={{ width: "50%" }}><Image src={moonchild} /></Col></Row>

            <Image src={pc} />

            <Row><Col style={{ width: "50%" }}><Image src={puzzle} /></Col>
              <Col style={{ width: "50%" }}><Image src={metro} /></Col></Row>

          </TabPane>

          <TabPane tab="Ramen and Pastels" key="4">
            <Row><Col style={{ width: "50%" }}><Image src={kawai} /></Col>
              <Col style={{ width: "50%" }}><Image src={gucci} /></Col></Row>
            <Row><Col style={{ width: "50%" }}><Image src={cup} /></Col>
              <Col style={{ width: "50%" }}><Image src={murakami} /></Col></Row>

          </TabPane>

          <TabPane tab="Clay" key="5">

            <Image src={clay} />

          </TabPane>

          <TabPane tab="Plants" key="6">

            <Row><Col style={{ width: "50%" }}><Image src={avacado} /></Col>
              <Col style={{ width: "50%" }}><Image src={farm} /></Col></Row>
            <Row><Col style={{ width: "50%" }}><Image src={pot} /></Col>
              <Col style={{ width: "40%" }}><Image src={mosstoggle} /></Col></Row>

          </TabPane>

          <TabPane tab="City" key="7">

            <Image src={aquarium} />
            <Row><Col style={{ width: "50%" }}><Image src={flowers} /></Col>
              <Col style={{ width: "50%" }}><Image src={tiles} /></Col></Row>
              <Image src={artgal} />
              <Image src={metrotrain} />

          </TabPane>

        </Tabs>
        <br /><br /><br /><br /><br />
      </div>

    </div>
  );
}

export default Art;