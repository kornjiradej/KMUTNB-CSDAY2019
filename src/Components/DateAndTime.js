import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/DateAndTime.css';

export default class DateAndTime extends Component {
  state = {
    activities: [
      {
        time: "วันที่ 7 มีนาคม 2018",
        activity: ""
      },{
        time: "10.00 – 11.30 น.",
        activity: "ลงทะเบียนผู้เข้าร่วมงาน ณ โถงชั้น 1 โซน A คณะวิทยาศาสตร์ประยุกต์"
      }, {
        time: "11.30 – 11.40 น.",
        activity: "พิธีเปิด/กล่าวต้อนรับนักศึกษา/กล่าวต้อนรับบริษัทที่เข้ามาร่วมชมงาน"
      }, {
        time: "11.40 – 12.00 น.",
        activity: "การแสดงโครงงานพิเศษและสหกิจศึกษาจากนักศึกษาภาควิชาฯ"
      }, {
        time: "12.00 – 13.00 น.",
        activity: "รับประทานอาหารกลางวัน"
      }, {
        time: "13.00 – 16.00 น.",
        activity: "การแสดงโครงงานพิเศษและสหกิจศึกษาจากนักศึกษาภาควิชาฯ"
      }
      , {
        time: "วันที่ 8 มีนาคม 2562",
        activity: ""
      }
      , {
        time: "10.00 – 11.30 น.",
        activity: "ลงทะเบียนผู้เข้าร่วมงาน ณ โถงชั้น 1 โซน A คณะวิทยาศาสตร์ประยุกต์"
      }, {
        time: "11.30 – 12.00 น.",
        activity: "การแสดงโครงงานพิเศษและสหกิจศึกษาจากนักศึกษาภาควิชาฯ"
      }, {
        time: "12.00 – 13.00 น.",
        activity: "รับประทานอาหารกลางวัน"
      }, {
        time: "13.00 – 16.00 น.",
        activity: "การแสดงโครงงานพิเศษและสหกิจศึกษาจากนักศึกษาภาควิชาฯ"
      }, {
        time: "วันที่ 9 มีนาคม 2562",
        activity: ""
      }, {
        time: "08.30 – 09.00 น.",
        activity: "ลงทะเบียนผู้เข้าร่วมงาน ณ โถงชั้น 1 โซน A คณะวิทยาศาสตร์ประยุกต์"
      }, {
        time: "09.00 – 10.00 น.",
        activity: "การแสดงโครงงานพิเศษและสหกิจศึกษาจากนักศึกษาภาควิชาฯ"
      }, {
        time: "10.00 – 11.00 น.",
        activity: "Block Chain ในวงการอุตสาหกรรม ปัจจุบันโดย คุณพุทธิพร หงษ์สุรกุล บริษัทเอ็นเทอร์ คอร์ปอเรชั่น จำกัด "
      }, {
        time: "11.00 – 12.00 น.",
        activity: "การนำ Image Processing ไปใช้ในวงการอุตสาหกรรมยุคปัจจุบัน โดย คุณประวีร์ เครือโชติกุล บริษัท โซลิแมค ออโตเมชั่น จำกัด "
      }, {
        time: "12.00 – 13.00 น.",
        activity: "รับประทานอาหารกลางวัน"
      }, {
        time: "13.00 – 14.00 น.",
        activity: "เทคโนโลยีที่ชาว CS ควรรู้ก่อนออกไปสู่ตลาดแรงงาน โดย คุณชาญ อริยกุล บริษัท กูเกิล คลาวด์ ไทยแลนด์"
      }, {
        time: "14.00 – 16.10 น.",
        activity: "ประกาศผลรางวัลโครงงานยอดเยี่ยมของนักศึกษา/มอบรางวัล ผู้ได้รับรางวัล ขึ้นกล่าวบรรยายสรุปโครงงาน"
      }, {
        time: "16.10 – 16.20 น.",
        activity: "พิธีปิด"
      }
    ]
  }
  render() {
    const {activities} = this.state;
    const activityItems = activities.map(({activity, time}) => (
      <div className="time-table-item" key={time}>
        <div className="time">
          <h4 data-aos="fade-right" style={{
            margin: 0
          }}>{time}</h4>
        </div>
        <div className="activity" data-aos="fade">
          <h5 data-aos="fade-left" style={{
            margin: 0
          }}>{activity}</h5>
        </div>
      </div>
    ))
    return (
      <Element className="mgt-global-20" name="scroll-time">
        <div className="Activities" data-aos="fade-up">
          <div className="title-section">
            <h1>DATE-TIME & DESCRIPTION</h1>
          </div>
          <div className="time-table">
            {activityItems}
          </div>
        </div>
      </Element>
    )
  }
}
