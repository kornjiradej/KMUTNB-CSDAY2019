import React, {Component} from 'react';
import { Element } from 'react-scroll'
import '../Styles/Activities.css';

export default class TimeTable extends Component {
  state = {
    activities: [
      {
        time: "10:00",
        activity: "Start Registration & Voting"
      }, {
        time: "13:30 - 14:00",
        activity: "1st Session : วงการอุตสาหกรรมด้านเทคโนโลยีในปัจจุบัน"
      }, {
        time: "14:00 - 14:30",
        activity: "2nd Session : ความคาดหวังต่อนักศึกษาที่เข้ารับการศึกษาในภาควิชา"
      }, {
        time: "14:30 - 15:00",
        activity: "3rd Session : ประสบการณ์การฝึกงานสนุกๆที่ต่างประเทศ"
      }, {
        time: "16:00",
        activity: "Close Voting"
      }
      , {
        time: "16:30",
        activity: "Awards Announcement"
      }
      , {
        time: "17:00",
        activity: "End"
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
            <h1>ACTIVITIES</h1>
          </div>
          <div className="time-table">
            {activityItems}
          </div>
        </div>
      </Element>
    )
  }
}