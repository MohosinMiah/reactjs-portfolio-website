import React, { Component } from 'react';

import aboutMeData from './Data/aboutMeData';
import   './About.css'
export default class About extends Component {
  render() {
    let aboutMe = aboutMeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={aboutMe.image} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 aboutMe.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{aboutMe.name}</span>
                     <br></br>
       						   <span>
                     {aboutMe.address}
                    </span>
                    <br></br>
                    <span>{aboutMe.website}</span>
                    <p> {aboutMe.email}</p>
                   
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}