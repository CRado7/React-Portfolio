import Signiture from '../assets/portfolio-sig.svg'
export default function Nav() {
  return (
  <header id="header" className="sticky-top"> 

    <nav className="primary-menu navbar navbar-expand-lg text-uppercase navbar-line-under-text fw-600">
      <div className="container position-relative">
        <div className="col-auto col-lg-2 d-inline-flex ps-lg-0"> 

          <img className="logo" src={Signiture} alt="Christopher"/>

        </div>
        <div className="col col-lg-8 navbar-accordion px-0">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button>
          <div id="header-nav" className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
			        <li className="nav-item"><a className="nav-link smooth-scroll" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#proficiences">Proficiences</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="col-auto col-lg-2 d-flex justify-content-end ps-0">
          <ul className="social-icons">
            <li className="social-icons-github"><a data-bs-toggle="tooltip" href="https://github.com/CRado7" target="_blank" title="" data-bs-original-title="GitHub"><i className="fab fa-github"></i></a></li>
            <li className="social-icons-linkedin"><a data-bs-toggle="tooltip" href="https://www.linkedin.com/in/christopher-ferraro-7a3883170/" target="_blank" title="" data-bs-original-title="linkedin"><i className="fab fa-linkedin"></i></a></li>
            {/* <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="" data-bs-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li className="social-icons-instagram"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="" data-bs-original-title="Instagram"><i className="fab fa-instagram"></i></a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}