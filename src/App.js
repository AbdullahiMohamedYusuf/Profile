import React, { useRef } from 'react';
import Button from './components/button';
import { FaGithub, FaTwitter, FaLinkedinIn, FaBookReader } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

import Bar from './components/bar';
import Experince from './components/experince';
import Skill from './components/skill';
import './style.css';
import Footer from './components/footer'
function App() {
  const skills = ["HTML", "CSS", "Javacript", "Python", "Django", "Django REST", "Flask", "MongoDB", "React"]
  const targetRef = useRef(null);
  const ExperinceRef = useRef(null);
  const FooterRef = useRef(null);



  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth', // You can use 'auto' for instant scrolling
        block: 'start',     // or 'end', 'center', 'nearest'
        inline: 'nearest'   // or 'start', 'end', 'center'
      });
    }
  };

  const ScrollToExperince = () => {
    if (ExperinceRef.current) {
      ExperinceRef.current.scrollIntoView({
        behavior: 'smooth', // You can use 'auto' for instant scrolling
        block: 'start',     // or 'end', 'center', 'nearest'
        inline: 'nearest'   // or 'start', 'end', 'center'
      });
    }
  };
  const ScrollToFooter = () => {
    if (FooterRef.current) {
      FooterRef.current.scrollIntoView({
        behavior: 'smooth', // You can use 'auto' for instant scrolling
        block: 'start',     // or 'end', 'center', 'nearest'
        inline: 'nearest'   // or 'start', 'end', 'center'
      });
    }
  };

  return (
    <div className='App'>
      <nav>
        <div className="logo">
          <FaBookReader />
        </div>
        <ul>
          <li><span>01.</span> <button onClick={scrollToTarget} className='scroll'>About</button></li>
          <li><span>02.</span> <button onClick={ScrollToExperince} className='scroll'>Experince</button></li>
          <li><span>03.</span> <button onClick={ScrollToFooter} className='scroll'>Contact</button></li>
          <Button input="Resume" />
        </ul>
      </nav>
      <div className="socials" >
        <a href="https://github.com/AbdullahiMohamedYusuf"><FaGithub /></a>
        <a href="https://twitter.com/notdecid3d"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <div className="line"></div>
      </div>
      <div className="center">
        <div className="display">
          <h5>Hi, my name is</h5>
          <h1>Abdullahi Mohamed, <span><TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Software Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Backend Developer',
              1000,
              'Python Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          /></span></h1>
          <p>


            A passionate software developer with a
            flair for turning intricate code into
            innovative solutions. With a curious mind
            and a drive to create, I thrive on crafting
            clean and efficient code that brings ideas to life.
            <br />
            <br />
          </p>
          <button onClick={ScrollToFooter} >Get in Touch</button>
        </div>
      </div>
      <div className="about" ref={targetRef}>
        <div className="font">
          <h1><span>1.0</span> About</h1>
          <h4><div className="verical"></div>Who am I<div className="verical"></div></h4>
        </div>
        <div className="info">
          <p>  A seasoned software engineer with
            extensive expertise in Python, JavaScript, React, and a
            myriad of other cutting-edge technologies. With countless
            hours poured into coding and an impressive portfolio of
            diverse projects, I've honed my skills to become a true
            Python guru. My passion lies in crafting elegant solutions
            that bridge innovation with functionality. Let's connect
            and embark on transformative tech ventures together!
            <br />
            <br />
          </p>
          <div className="title">
            <h2> <span>1.1</span> My Current Skills</h2>
            <div className="uses">
              {skills.map((skill) => {
                return (
                  <Skill name={skill} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="something" ref={ExperinceRef} >
        <Experince />
      </div>
      <div className="footFoter" ref={FooterRef}>
        <Footer />
      </div>
    </div>
  )
}

export default App;
