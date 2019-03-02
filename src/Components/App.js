import React, {Component} from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'
import Navbar from './Navbar.js'
import DateAndTime from './DateAndTime.js'
import Detail from './Detail.js'
import Location from './Location.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import Activities from './Activities';
import AOS from 'aos';
import {Element} from 'react-scroll'
import StarfieldCanvas from './StarfieldCanvas';
import Table from './Table';
import { countView } from './Firebase.js';

class App extends Component {
  componentDidMount() {
    AOS.init({duration: 1000, easing: 'ease-in-out-quart'});
    countView();
  }
  render() {
    return (
      <Element name="scroll-landing">
        <StarfieldCanvas/>
        <Navbar/>
        <div className="App">
          <Landing/>
          <DateAndTime/>
          <Detail/>
          {/* <Activities /> */}
          <Table/>
          <Location/>
          <Contact/>
          <Footer/>
        </div>
      </Element>
    );
  }
}

export default App;
