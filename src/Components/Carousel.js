import React, { Component } from 'react';
import $ from 'jquery';
import Projects from '../Utils/Projects.json';
class Carousel extends Component {
	Data = Projects;

	constructor(props) {
    super(props);
    this.state = {
    	crsFirst: 0,
    	crsSecond: 1,
    	crsThird: 2,
    	crsFourth: 3,
    	crsFifth: 4
    };
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
	}
	getName = function(index){
		return this.Data[index].name;
  	}
	getType = function(index){
		return this.Data[index].type;
	}
	getClass = function(index){
		if ( this.Data[index].name === undefined )
			return 'hide';
		else return '';
	}
	getMajorColor = function(index){
        let type = '';
        if(this.Data[index].type === "Mobile Application") type='mobile';
        else if(this.Data[index].type === "Web Apllication") type='web';
        else if(this.Data[index].type === "ML & Data analytics") type='ml';
        else if(this.Data[index].type === "System(ระบบเบื้องหลัง)") type='system';
        else if(this.Data[index].type === "Blockchain") type='blockchain';
        else type="other";
		return type + "-color";
	}
	up = function(e){
		e.preventDefault();
		if( this.state.crsFirst > 0 ){
			this.setState((prevState) => {
				return {
					crsFirst: prevState.crsFirst -1 ,
		    	crsSecond: prevState.crsSecond -1,
		    	crsThird: prevState.crsThird -1,
		    	crsFourth: prevState.crsFourth -1,
		    	crsFifth: prevState.crsFifth -1
			  }
			})
		}
	}
	down = function(e){
		e.preventDefault();
		if( this.state.crsFifth < this.Data.length -1 ){
			this.setState((prevState) => {
				return {
  				crsFirst: prevState.crsFirst +1 ,
  	    	crsSecond: prevState.crsSecond +1,
  	    	crsThird: prevState.crsThird +1,
  	    	crsFourth: prevState.crsFourth +1,
  	    	crsFifth: prevState.crsFifth +1
			  }
			});
		}
	}
	render() {
		return (
			<div className="Carousel">
				<i className="fa-caret-up" onClick={this.up} hidden></i>
				<div className="Carousel-display">
					<div className={"Carousel-item crs-first " + this.getClass(this.state.crsFirst)}>
						<div className="row Carousel-item-text">
							<div className={"col-sm-12 col-xs-12 " + this.getMajorColor(this.state.crsFirst)}>{this.getName(this.state.crsFirst)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-second " + this.getClass(this.state.crsSecond)}>
						<div className="row Carousel-item-text">
							<div className={"col-sm-12 col-xs-12 " + this.getMajorColor(this.state.crsSecond)}>{this.getName(this.state.crsSecond)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-third " + this.getClass(this.state.crsThird)}>
						<div className="row Carousel-item-text">
							<div className={"col-sm-12 col-xs-12 " + this.getMajorColor(this.state.crsThird)}>{this.getName(this.state.crsThird)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-fourth " + this.getClass(this.state.crsFourth)}>
						<div className="row Carousel-item-text">
							<div className={"col-sm-12 col-xs-12 " + this.getMajorColor(this.state.crsFourth)}>{this.getName(this.state.crsFourth)}</div>
						</div>
					</div>
					<div className={"Carousel-item crs-fifth " + this.getClass(this.state.crsFifth)}>
						<div className="row Carousel-item-text">
							<div className={"col-sm-12 col-xs-12 " + this.getMajorColor(this.state.crsFifth)}>{this.getName(this.state.crsFifth)}</div>
						</div>
					</div>
				</div>
				<i className="fa-caret-down" onClick={this.down} hidden></i>
			</div>
		);
  }
}
let i = 0, c = 0, btn = '';
$(document).ready(function() {
	setInterval(function(){
		if(i >= 75){
			btn = 'up'
			c = -1;
		}else if(i <= 0){
			btn = 'down'
			c = 1;
		}
		$('.fa-caret-'+btn).click();
		i += c;
	}, 1000);
});


export default Carousel;
