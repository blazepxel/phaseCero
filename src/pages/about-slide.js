import React, { Component } from "react";
import Slider from "react-slick";
import about1 from '../assets/img/about_us_2.jpg'
import about2 from '../assets/img/about_us_3.jpg'
import about3 from '../assets/img/about_us_4.jpg'
import about4 from '../assets/img/about_us_5.jpg'
import about5 from '../assets/img/about_us_6.jpg'
import about6 from '../assets/img/about_us_7.jpg'
import about7 from '../assets/img/about_us_8.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={about1} alt=""/>
          </div>
          <div>
            <img src={about2} alt=""/>
          </div>
          <div>
            <img src={about3} alt=""/>
          </div>
          <div>
            <img src={about4} alt=""/>
          </div>
          <div>
            <img src={about5} alt=""/>
          </div>
          <div>
            <img src={about6} alt=""/>
          </div>
          <div>
            <img src={about7} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}