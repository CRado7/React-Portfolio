export default function Resume() {
        return (
        <section id="resume" className="section">
                <div className="container"> 

                    <p className=" text-center mb-2 wow fadeInUp"><span className="bg-primary text-dark px-2">Resume</span></p>
                    <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">A summary of My Resume</h2>

                    
                    <div className="row g-5 mt-5"> 

                        <div className="col-lg-6 wow fadeInUp">
                            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
                            <div className="border-start border-2 border-primary ps-3">
                                <h3 className="text-5">Bachelor of Fine Arts</h3>
                                <p className="mb-2">University of Massachusetts - Dartmouth {/*/ 2015 - 2018*/}</p>
                                <p className="text-white-50">I received a BFA with a concentration in Graphic Design. The curriculum covered Brand Identity, Web Design, Color Theory, and Creative Thinking practices.</p>
                                <hr className="my-4"></hr>
                                <h3 className="text-5">Web Development Certificate</h3>
                                <p className="mb-2">University of Central Florida {/*/ 2023 - 2024*/}</p>
                                <p className="text-white-50">This certificate was a six month online boot camp administered through <a href="https://www.edx.org">edX</a>. Topics covered
                                include but are not limited to the MERN stack, debugging, critical thinking skills, SCRUM workflow</p>
                                {/* <hr className="my-4"></hr>
                                <h3 className="text-5">Computer Science</h3>
                                <p className="mb-2">International University / 2013 - 2014</p>
                                <p className="text-white-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p> */}
                            </div>
                        </div>
     
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
                            <div className="border-start border-2 border-primary ps-3">
                                <h3 className="text-5">Project Manager</h3>
                                <p className="mb-2">Mittera {/*/ 2022 - 2023*/}</p>
                                <p className="text-white-50">Mittera is a large commercial printing corperation. Project Managers at Mittera dutifuly keep track of jobs and relay all
                                updates to the client and sales team. Project Managers work closely with both front and back of house to ensure each job stays on track and on budget. Project Managers
                                need to have a calm demenor when talking with clients but also have to problem solve and communicate with the production floor and the scheduler to properly
                                relay information to the client.</p>
                                <hr className="my-4"></hr>
                                <h3 className="text-5">Print Production Manager</h3>
                                <p className="mb-2">Kastlfel {/*/ 2020 - 2022*/}</p>
                                <p className="text-white-50">Kastlfel is a eco-friendly clothing brand. Their products are sold in most every National Park, Zoo, Museum, ect; in North America. The 
                                printing process that decorates the shirts is 100% waterbased and the shop practices eco-friendly waste disposal. THe Print Production Managers role includes not only
                                managing a production schedule that delivers quality goods to the customers on time, but also the necessity to uphold and expand on the eco-friendly practices that the 
                                Kastlfel brand promotes.</p>
                                <hr className="my-4"></hr>
                                <h3 className="text-5">Color Separation Specalist</h3>
                                <p className="mb-2">Kastlfel {/*/ 2019 - 2020*/}</p>
                                <p className="text-white-50">The Color Separatino Specalist is a skilled player in highly technical screen print ships. The role of the specalist is to dissect an image
                                with a full range of colors and reduce it down to 10 colors that will blend together on a shirt to give the appearance of a full color image.</p>
                            </div>
                        </div>
                    </div>
                    
             
                    <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
                    <div className="row gx-5">
                        <div className="col-md-6 wow fadeInUp">
                            <p className="fw-500 text-start mb-2">Web Design <span className="float-end">75%</span></p>
                            <div className="progress progress-sm mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="fw-500 text-start mb-2">HTML/CSS <span className="float-end">95%</span></p>
                            <div className="progress progress-sm mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="fw-500 text-start mb-2">JavaScript <span className="float-end">75%</span></p>
                            <div className="progress progress-sm mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <p className="fw-500 text-start mb-2">Illustrator <span className="float-end">99%</span></p>
                            <div className="progress progress-sm mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: '99%'}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="fw-500 text-start mb-2">Photoshop <span className="float-end">95%</span></p>
                            <div className="progress progress-sm mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="fw-500 text-start mb-2">Figuring Sh*t out <span className="float-end">99%</span></p>
                            <div className="progress progress-sm mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: '99%'}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-5 wow fadeInUp"><a href="#" className="btn btn-outline-light shadow-none rounded-0">Download CV</a></p>
                </div>
            </section>
        );
}