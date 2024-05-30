import React from 'react';
import { useState, useEffect } from 'react';
import Parlor from '../assets/parlor/ParlorThumb.png';
import Code from '../assets/RandomCodeGenerator.png';
import SLAB from '../assets/SLAB.svg';
import DopeSouls from '../assets/dopesouls.png';
import ECOM from '../assets/ECommerceBackend.png';
import BootMate from '../assets/bootmate.png';
import TaskList from '../assets/TaskList.png';
import README from '../assets/README.png';


import SkiCard from '../components/SkiCard';


export default function Portfolio() {

  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = seen ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal') {
        setSeen(true);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [seen]);



  function SkiDesigns () {
    return (
      <div id="modal" className="skibig">
        <SkiCard />
        <button className="close-btn" onClick={togglePop}>Close</button>
      </div>
    )
  }

    return (
        <section id="portfolio" className="section bg-light">
        <div className="container"> 

          <p className=" text-center mb-2 wow fadeInUp"><span className="bg-primary text-dark px-2">Portfolio</span></p>
          <h2 className="text-10 text-dark fw-600 text-center mb-5 wow fadeInUp">Some of my most recent projects</h2>

          

          <ul className="portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-4 wow fadeInUp">
            <li className="nav-item"> <a data-filter="*" className="nav-link rounded-0 active" href="">All</a></li>
            <li className="nav-item"> <a data-filter=".parlor" href="" className="nav-link rounded-0">Parlor Skis</a></li>
            <li className="nav-item"> <a data-filter=".ucf" href="" className="nav-link rounded-0">UCF BootCamp Projects</a></li>
            <li className="nav-item"> <a data-filter=".caseStudy" href="" className="nav-link rounded-0">Case Studies</a></li>
            <li className="nav-item"> <a data-filter=".inProgress" href="" className="nav-link rounded-0">In Progress</a></li>
            <li className="nav-item"> <a data-filter=".youtube" href="" className="nav-link rounded-0">Walk Through Videos</a></li>
          </ul>

          <div className="portfolio wow fadeInUp">
            <div className="row g-4 mt-3 portfolio-filter">

              <div className="col-sm-6 col-lg-4 parlor" onClick={togglePop}>
              {seen ? <SkiDesigns toggle={togglePop} /> : null}
                <div className="portfolio-box">
                  <div className="portfolio-img"> <img className="img-fluid d-block" src={Parlor} alt="Parlor Skis"></img>
                    <div className="portfolio-overlay">
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
                        <h5 className="text-white text-5">Parlor Ski</h5>
                        <span className="text-light">Custom Ski Graphics</span> 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 ucf youtube" data-wow-delay="0.2s">
                <div className="portfolio-box">
                  <div className="portfolio-img"><img class="img-fluid d-block" src={README} alt=""></img>                 
                    <div className="portfolio-overlay"> <a className="popup-youtube stretched-link" href="https://www.youtube.com/watch?v=isLLp0w5kI0" target="blank"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-video"></i></p>
                        <h5 className="text-white text-5">Command Line README Generator</h5>
                        {/* <a href="https://github.com/CRado7/Random-Password-Generator"><img className="github-link" src={GitHub}></img></a> */}
                        <span className="text-light">Node.js Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 ucf youtube" data-wow-delay="0.2s">
                <div className="portfolio-box">
                  <div className="portfolio-img"><img class="img-fluid d-block" src={ECOM} alt=""></img>                 
                    <div className="portfolio-overlay"> <a className="popup-youtube stretched-link" href="https://youtu.be/aoeAmIawO-g" target="blank"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-video"></i></p>
                        <h5 className="text-white text-5">ORM E-Commerce Backend</h5>
                        {/* <a href="https://github.com/CRado7/Random-Password-Generator"><img className="github-link" src={GitHub}></img></a> */}
                        <span className="text-light">Insomnia Backend Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 ucf" data-wow-delay="0.2s">
                <div className="portfolio-box">
                  <div className="portfolio-img"> <img className="img-fluid d-block" src={Code} alt=""></img>                  
                    <div className="portfolio-overlay"> <a className="popup-img stretched-link" href="https://crado7.github.io/Random-Password-Generator/" target="blank"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
                        <h5 className="text-white text-5">Random Code Generator</h5>
                        {/* <a href="https://github.com/CRado7/Random-Password-Generator"><img className="github-link" src={GitHub}></img></a> */}
                        <span className="text-light">JavaScript Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 ucf" data-wow-delay="0.2s">
                <div className="portfolio-box">
                  <div className="portfolio-img"> <img className="img-fluid d-block" src={TaskList} alt=""></img>                  
                    <div className="portfolio-overlay"> <a className="popup-img stretched-link" href="https://floating-reaches-02785-c3d3bbac3309.herokuapp.com" target="blank"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
                        <h5 className="text-white text-5">Task List</h5>
                        {/* <a href="https://github.com/CRado7/Random-Password-Generator"><img className="github-link" src={GitHub}></img></a> */}
                        <span className="text-light">Express.js Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 ucf inProgress" data-wow-delay="0.3s">
                <div className="portfolio-box">
                  <div className="portfolio-img"> <img className="img-fluid d-block" src={BootMate} alt=""></img>
                    <div className="portfolio-overlay"> 
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
                        <h5 className="text-white text-5">BootMate</h5>
                        <span className="text-light">MERN Stack Project</span>
                        <br></br>
                        <span className="text-light"><i>In Progress</i></span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 caseStudy">
                <div className="portfolio-box">
                  <div className="portfolio-img"> <img className="img-fluid d-block" src={DopeSouls} alt=""></img>
                    <div className="portfolio-overlay"> <a className="popup-vimeo stretched-link" href="https://vimeo.com/259411563"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-video"></i></p>
                        <h5 className="text-white text-5">Dope Souls</h5>
                        <span className="text-light">E-Commerce Site</span> 
                        <br></br>
                        <span className="text-light"><i>Case Study</i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-sm-6 col-lg-4 detailed" data-wow-delay="0.2s">
                <div className="portfolio-box">
                  <div className="portfolio-img"> <img className="img-fluid d-block" src="images/projects/project-5.jpg" alt=""></img>
                    <div className="portfolio-overlay"> <a className="popup-ajax stretched-link" href="ajax/portfolio-ajax-project-2.html"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-file-alt"></i></p>
                        <h5 className="text-white text-5">BaseDown</h5>
                        <span className="text-light">Screen Print Shop Scheduler</span> 
                        <br></br>
                        <span className="text-light"><i>Coming Soon</i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-sm-6 col-lg-4 caseStudy" data-wow-delay="0.2s">
                <div className="portfolio-box">
                  <div className="portfolio-img slab"> <img className="img-fluid d-block" src={SLAB} alt=""></img>
                    <div className="portfolio-overlay"> <a className="popup-img stretched-link" href="images/projects/project-6.jpg"></a>
                      <div className="portfolio-overlay-details">
                        <p className="text-primary text-8"><i className="fas fa-image"></i></p>
                        <h5 className="text-white text-5">SLAB</h5>
                        <span className="text-light">Surf Lifestyle & Healthy Living Blog</span>
                        <br></br>
                        <span className="text-light"><i>Case Study</i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );

}