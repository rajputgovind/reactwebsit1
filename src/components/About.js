import React from 'react';
import Common from './Common';
import web from '../Image/About.jpg'
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        visit = "/contact"
        imgsrc ={web}
        btname = "Contact Now"
      >

      </Common> 
    </>
  );
}

export default About;
