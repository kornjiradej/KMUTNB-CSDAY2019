import React, { Component } from 'react';
import '../Styles/Landing.css';
import { Button } from 'reactstrap';
import Carousel from './Carousel.js'
import { Element } from 'react-scroll'
import Parallax from 'parallax-js';
import { countRegisterClick } from './Firebase';

class Landing extends Component {
  componentDidMount() {
    var scene = document.getElementById('parallax');
    // eslint-disable-next-line
    var parallaxInstance = new Parallax(scene);
  }

  render() {
    return (
      <Element name="scroll-time">
        <div className="Landing" data-aos="fade-up">
          <div className="Landing-head">
            <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="180px" className="Landing-logo" />
            <h1 className="Landing-title">KMUTNB CSDAY 2018</h1>
            <h1 className="Landing-preparetext">เตรียมพบกับ!! งานประกวดเทคโนโลยีสุดยิ่งใหญ่</h1>
            <h2 className="inline">ของ<span className="Landing-csstudent">นักศึกษาภาควิชาคอมพิวเตอร์</span></h2>
            <h2 className="inline">&nbsp;มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</h2>
          </div>
          <div id="parallax">
            <div data-depth="0.2">
              <Carousel />
            </div>
          </div>
          <div className="Landing-calltoaction">
            <div onClick={ countRegisterClick }>
              <Button outline color="primary" size="lg" className="Landing-register"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1MoDN5sd6t0pDZRE85aePMoUm4aTjKObXAUP6EohqAqsKKw/viewform"
                target="_blank"
                >
                ลงทะเบียนเข้าร่วมงาน
              </Button>
            </div>
            <span className="Landing-register-text">สำหรับบุคคลภายนอกมหาวิทยาลัยที่สนใจเข้าเยี่ยมชม</span>
          </div>
        </div>
      </Element>
    );
  }
}

export default Landing;
