import React, {Component} from 'react';
import {Element} from 'react-scroll'
import '../Styles/DateAndTime.css';

export default class DateAndTime extends Component {
  render() {
    return (
      <Element className="mgt-global-20" name="scroll-date">
        <div className="DateAndTime" data-aos="fade-up">
          <div className="left-side">
            <h1>DATE & TIME</h1>
            <h2 data-aos="fade-right">6 March 2018</h2>
            <h2 data-aos="fade-right">10:00 - 16:00</h2>

              <h2 data-aos="fade-right">7 March 2018</h2>
              <h2 data-aos="fade-right">10:00 - 16:00</h2>

              <h2 data-aos="fade-right">8 March 2018</h2>
              <h2 data-aos="fade-right">10:00 - 16:00</h2>
          </div>
          <div className="right-side">
            <h1 data-aos="fade-up">PLACE</h1>
              <h2 data-aos="fade-left">โชว์ผลงานโปรเจคของสหกิต</h2>
              <h2 data-aos="fade-left">&nbsp;</h2>
              <h2 data-aos="fade-left">โชว์โปรเจคของโครงการพิเศษ</h2>
              <h2 data-aos="fade-left">&nbsp;</h2>
            <h2 data-aos="fade-left">คณะวิทยาศาสตร์ประยุกต์ (78)</h2>
            <h2 data-aos="fade-left">มหาวิทยาลัยเทคโนโลยี
              <br/>พระจอมเกล้าพระนครเหนือ</h2>
          </div>
        </div>
      </Element>
    )
  }
}
