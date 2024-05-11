import SprayArt from '../assets/spray-art.svg'

export default function About() {
    return (
        <section id="about" className="section">
      <div className="container"> 
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp"><span className="bg-primary text-dark px-2">About Me</span></p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">Get to Know Me</h2>
        {/* Heading end */}
        
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">Hi, I'm <span className="fw-700 border-bottom border-3 border-primary">CHRISTOPHER</span> !</h2>
            <p className="text-5">I am an aspiring Full Stack Web Developer with a background in Graphic Design.
              Graphic Design and Web Design were my inspiration to learn how to code websites. As of now, my design skills are most frequently
              used to create logos and branding for start-up businesses and for making custom ski graphics and t-shirt designs.
              In my free time, I chase waves around the east coast year-round and enjoy snowboarding the mountains of Colorado and Vermont in the winter.
              I am also a part of a rugby club in the area.
              I have a passion for creating and problem solving, and I am excited to bring that passion to the world of web development.</p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s">
            <div className="featured-box style-4">
              <img src={SprayArt} alt="Spray Can" className="img-fluid" />
              {/* <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle"><span className="wow heartBeat" data-wow-delay="1.3s">22</span></div>
              <h3 className="text-7 wow rubberBand" data-wow-delay="2s">Years of <span className="fw-700">Experiance</span></h3> */}
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp">
            <p className="text fw-500 mb-0">Name:</p>
            <p className="text-4 text-white-50 fw-600 mb-0">Christopher Ferraro</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0"><a className="text-white-50" href="mailto:christopher.ferraro34@gmail.com">Email Me</a></p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
            <p className="text fw-500 mb-0">Date of birth:</p>
            <p className="text-4 text-white-50 fw-600 mb-0">September 8<sup>th</sup>, 1994</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text fw-500 mb-0">From:</p>
            <p className="text-4 text-white-50 fw-600 mb-0">Springfield, MA</p>
          </div>
        </div>
      </div>
    </section>
        
    );
}