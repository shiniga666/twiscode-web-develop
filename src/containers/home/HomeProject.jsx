import React from 'react';

const HomeProject = () => {
    return (

            <section className="page-section" id="services">
    <div className="container">
    
      <div className="banner-img offset-lg-1 col-lg-12 col-md-6">
      <h2 className="text-left mt-0">Stay focused on your business</h2>
      <p className="text-muted col-md-4">Bringin business ideas to life through use of technology and design.</p>
          <img margin-top="90px" className="img-fluid" src="/public/img/icon2.png" width="400px" alt="" />
        </div>
    </div>
    <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Hard Workers</p>
          </div>
  
        </div>
  </section>
    );
};

export default HomeProject;