import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <Element className="mgt-global-20" name="scroll-time">
                <div className="Contact" data-aos="fade-up">
                    <h2>ติดต่อสอบถามหรือสนับสนุนโครงการได้ที่</h2>
                    <h4>พี่เปอร์ : <a href="tel:+66838503083">083-850-3083</a></h4>
                    <h4>พี่ดิว :  <a href="tel:+66888908220">088-890-8220</a></h4>
                    <h4>พี่แอร์ : <a href="tel:+66996353844">099-635-3844</a></h4>
                    <br />
                    <a href="https://www.facebook.com/CIS-Kmutnb-258724547497210/" target="_blank" rel="noopener noreferrer">
                        <img src="/fb.png" alt="KMUTNB CSDAY 2018" width="30px;" />
                        <span>CIS KMUTNB</span>
                    </a>
                </div>
            </Element>
        );
    }
}

export default Contact;
