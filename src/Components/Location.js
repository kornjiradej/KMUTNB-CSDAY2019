import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Map } from './Map';

import '../Styles/Location.css';

class Location extends Component {
	render() {
		return (
			<Element className="mgt-global-20" name="scroll-location">
				<div className="Location  map-flexbox" data-aos="fade-up">
					<div className="map-location halfnaja" data-aos="zoom-in-up">
						<Map />
					</div>
					<div className="content-location halfnaja">
						<div className="content-location-header">Location</div>
						<div className="content-location-body">ภาควิชาวิทยาการคอมพิวเตอร์</div>
						<div className="content-location-body">คณะวิทยาศาสตร์ประยุกต์(78)</div>
						<div className="content-location-body">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</div>
						<div className="content-location-footer">สามารถนำรถยนต์เข้ามาจอดในมหาวิทยาลัยได้ฟรี</div>
					</div>
				</div>
			</Element>
		);
	}
}

export default Location;
