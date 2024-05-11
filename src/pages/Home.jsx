import React from 'react';
import profilePic from '../assets/profile-pic.png';
import mountainBackground from '../assets/background.jpg';

import Nav from '../components/Nav';
import About from './About';
import Proficiences from './Proficiences';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';


export default function Home() {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div className="hero-bg parallax" style={{backgroundImage: `url(${mountainBackground})`}}></div>
        <div className="hero-content d-flex flex-column fullscreen py-5">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <div className="bg-white shadow rounded-pill p-2 mb-4 d-inline-block wow zoomIn">
                  <img className="img-fluid rounded-pill d-block profile-pic" src={profilePic} title="This is Christopher" alt="Profile Picture" />
                </div>
                <h2 className="text-10 text-white text-uppercase fw-600 mb-4 wow fadeInUp">Hello! I'm Christopher Ferraro</h2>
                <h2 className="text-8 text-white text-uppercase fw-400 mb-4 wow fadeInUp">Web Developer & Graphic Designer</h2>
                <p className="text-5 text-light pb-3 wow fadeInUp">based in Springfield, MA.</p>
                <a href="#about" className="btn btn-primary rounded-0 smooth-scroll wow fadeInUp">About Me</a>
              </div>
            </div>
          </div>
          <div className="container py-2 text-center">
            <a href="#about" className="scroll-down-arrow text-white smooth-scroll">
              <span className="animated">
                <i className="fas fa-arrow-down"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Nav />
      <About />
      <Proficiences />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
  );
}
