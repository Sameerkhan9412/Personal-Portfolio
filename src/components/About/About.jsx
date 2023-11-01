import React from "react";
import HtmlImg from "../../assets/img/htmlpng.png";
import cssImg from "../../assets/img/csspng.png";
import jsImg from "../../assets/img/jspng.png";
import reactImg from "../../assets/img/reactpng.png";
import tailwindImg from "../../assets/img/tailwindpng.png";
import bootstrap from "../../assets/img/bootstrappng.png";
import skillpng from "../../assets/img/skills.png";
import reduxImg from "../../assets/img/reduxpng.png";
import nodePng from "../../assets/img/nodejspng.png";
import mongoPng from "../../assets/img/mongodbpng.png";
import mysqlPng from "../../assets/img/mysqlpng.png";
import expressPng from "../../assets/img/expresspng.png";
import phpPng from "../../assets/img/phppng.png";
import javaPng from "../../assets/img/javapng.png";


import "./about.css";
const About = () => {
  return (
    <div className="container about" id="About">
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <div  class="skills-container ">
        <div class="skill-container-left">
          <h2 class="skill-heading">
            <span class="caps">M</span>e and
            <br />
            MyTech Stack
          </h2>
          <div class="skill-subHeading">
            <p>
              Hi Everyone, I am Sameer , As a fresher MERN stack web
              developer, I possess a strong foundation in JavaScript, React,
              Node.js, and MongoDB, eager to contribute and learn in a
              collaborative team environment.
            </p>
            <p>
              As a fresher MERN stack web developer, I bring a passion for
              creating innovative and user-friendly web applications. With a
              solid foundation in HTML, CSS, and JavaScript, I have honed my
              skills in building dynamic and responsive websites.
            </p>
            <p>
              I am well-versed in the MERN stack, comprising MongoDB,
              Express.js, React.js, and Node.js, and have a strong understanding
              of RESTful APIs. I thrive in collaborative environments and
              possess excellent problem-solving abilities. Committed to
              continuous learning, I am eager to contribute my knowledge and
              enthusiasm to a dynamic team, while further expanding my skills in
              full-stack web development.
            </p>
          </div>
        </div>
        <div className="skill-container-right">
          <div className="con">
            <div className="icon">
              <div className="imgBox">
                <img src={HtmlImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={cssImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={reactImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={tailwindImg} alt="" />
              </div>
              <div className="imgBox" >
                <img src={bootstrap} alt="" />
              </div>
              <div className="imgBox" >
                <img src={jsImg} alt="" />
              </div>
              <div className="imgBox" >
                <img src={skillpng} alt="" />
              </div>
              <div className="imgBox" >
                <img src={skillpng} alt="" />
              </div>
              <div className="imgBox" >
                <img src={skillpng} alt="" />
              </div>
            </div>
            <div className="content">
              <div className="icon2">
                <div className="imgBox1">
                  <img src={nodePng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={mysqlPng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={mongoPng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={expressPng} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;