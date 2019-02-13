import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <Element className="mgt-global-20" name="scroll-time">
                <div className="Contact" data-aos="fade-up">
                    <h2>ติดต่อสอบถามหรือสนับสนุนโครงการได้ที่</h2>
                    <h4>พี่เก้า : <a href="tel:+66826472997">082-647-2997</a></h4>
                    <h4>พี่พีช : <a href="tel:+66972491811">097-249-1811</a></h4>
                    <h4>พี่พลอย : <a href="tel:+66822589402">082-258-9402</a></h4>
                    <h4>พี่โฟม : <a href="tel:+66970714268">097-071-4268</a></h4>
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
