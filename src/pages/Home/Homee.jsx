import React, { useEffect } from 'react';
import './Home.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';



function Home() {
  useEffect(() => {
    // Hero Slider
    const sliderArrows = $('.hero-arrows');
    $('.hero-slider-one').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      fade: true,
      speed: 1000,
      appendArrows: sliderArrows,
      prevArrow: '<div class="prev"><i class="icofont-arrow-left"></i></div>',
      nextArrow: '<div class="next"><i class="icofont-arrow-right"></i></div>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1200, settings: { arrows: false } },
        { breakpoint: 768, settings: { arrows: false } },
        { breakpoint: 480, settings: { arrows: false } },
      ],
    });

    // Project Slider
    $('.project-slide-one').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 2500,
      prevArrow: '<div class="prev"><i class="icofont-arrow-left"></i></div>',
      nextArrow: '<div class="next"><i class="icofont-arrow-right"></i></div>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 992, settings: { arrows: false, slidesToShow: 2 } },
        { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
        { breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
      ],
    });

    // Testimonial 
    $('.testimonial-slider-two').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      prevArrow: '<div class="prev"><i class="icofont-arrow-left"></i></div>',
      nextArrow: '<div class="next"><i class="icofont-arrow-right"></i></div>',
      Speed: 2500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
    return () => {
      $('.hero-slider-one').slick('unslick');
      $('.project-slide-one').slick('unslick');
      $('.testimonial-slider-two').slick('unslick');
    };
  }, []);

  return (
    <div>
      {/* Hero section */}
      <section className="banner-area-v1">
        <div className="hero-slider-one">
          <div
            className="single-hero bg_cover slide-1"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1>
                      <span>Power Your</span>
                      Boilers
                      With Us.
                    </h1>
                    <h4>Leading industrial boiler solutions</h4>
                    <a href="#" className="main-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-hero bg_cover slide-2"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1>
                      <span>Boost Your</span>
                      Steam
                      Efficiency.
                    </h1>
                    <h4>Advanced boilers for all industries</h4>
                    <a href="#" className="main-btn">
                      View Solutions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-hero bg_cover slide-3"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1>
                      <span>Trusted For</span>
                      Boiler
                      Excellence.
                    </h1>
                    <h4>Reliable, safe, and efficient systems</h4>
                    <a href="#" className="main-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-arrows"></div>
      </section>

      {/* about section */}
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-thumb wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                <img src="/assets/images/bg/boiler.jpg" alt="Saviour Boilers" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consen-section-title style-two wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                <h2>Welcome to Saviour Boilers</h2>
                <p>
                  Innovating boiler technology to deliver high-performance heating solutions for diverse industrial needs.
                  Our approach ensures operational efficiency through robust design and smart thermal engineering.
                </p>
              </div>
              <div className="row wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="col-lg-6">
                  <div className="about-item">
                    <div className="about-icon">
                      <img src="/assets/images/bg/a2.png" alt="Growth Focus" />
                    </div>
                    <div className="about-content">
                      <h4>Our  Growth</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-item">
                    <div className="about-icon">
                      <img src="/assets/images/bg/a1.png" alt="Boiler Services" />
                    </div>
                    <div className="about-content">
                      <h4>Our Boiler Range</h4>
                    </div>
                  </div>
                </div>
                <div className="about-desc">
                  <p>
                    We engineer advanced steam and hot water boilers tailored for industrial demands.
                    Each unit is crafted with precision to ensure safety, reliability, and superior energy performance.
                  </p>
                </div>
                <div className="about-last-child">
                  <div className="Indastre-btn abt">
                    <a href="#">Read More <i className="icofont-arrow-right"></i></a>
                  </div>
                  <div className="signeture">
                    <img src="/assets/images/about/signeture.png" alt="Signature" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project  */}
      <section className="project-area-v1">
        <div className="project-main-section">
          <div
            className="project-bg bg_cover"
            style={{ backgroundImage: "url('/assets/images/bg/2.png')" }}
          ></div>
          <div className="container">
            <div className="col-lg-8">
              <div className="section-title section-white-title mb-100">
                <h2>
                  We Are Complete Some Project For Our <span>Foreign Customer.</span>
                </h2>
              </div>
              <div className="play-content">
                <a
                  href="#"
                  className="video-popup"
                >
                  <i class='bx bx-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-slide-wrapper">
          <div className="container">
            <div className="row project-slide-one">
              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p1.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p1.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Industry Build</span>
                    <h4><a href="#">Industrial Construction</a></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p2.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p2.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Building Construction</span>
                    <h4><a href="#">Construction Management</a></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p3.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p3.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Industry Build</span>
                    <h4><a href="#">Electronic Materials</a></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p4.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p4.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Building Construction</span>
                    <h4><a href="#">Construction Management</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p5.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p5.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Industry Build</span>
                    <h4><a href="#">Industrial Construction</a></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p6.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p6.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Building Construction</span>
                    <h4><a href="#">Construction Management</a></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p7.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p7.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Industry Build</span>
                    <h4><a href="#">Electronic Materials</a></h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src="/assets/images/bg/p8.jpg"
                      alt="project"
                    />
                    <div className="project-overlay">
                      <div className="project-content">
                        <div className="icon">
                          <a
                            href="/assets/images/bg/p8.jpg"
                            className="popup-icon img-popup"
                          >
                            <i className="icofont-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="span">Building Construction</span>
                    <h4><a href="#">Construction Management</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nav Tabs */}
      <section className="home mt-40 mb-40">
        <div className="container-fluid">
          <div className="nav__tabs">
            <h1 className="nav__tabs-main-heading">Engineered Excellence</h1>
            <p className="nav__tabs-subtitle">
              Explore our precision-engineered solutions tailored for industrial performance and sustainability.
            </p>

            {/* Tabs */}
            <div className="nav__tabs-nav">
              <button className="nav__tabs-btn active" data-tab="0">
                Power Boilers
              </button>
              <button className="nav__tabs-btn" data-tab="1">
                Process Boilers
              </button>
              <button className="nav__tabs-btn" data-tab="2">
                EPC Power Plant
              </button>
              <button className="nav__tabs-btn" data-tab="3">
                Air Pollution Control System
              </button>
            </div>

            {/* Tab Contents */}
            <div className="nav__tabs-content">
              {/* Panel 1: Power Boilers */}
              <div className="nav__tabs-panel active" data-panel="0">
                <div className="nav__tabs-card">
                  <div className="row g-0 h-100">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="nav__tabs-image-container">
                        <img
                          src="/assets/images/bg/t3.jpg"
                          alt="Power Boilers"
                          className="nav__tabs-image"
                        />
                        <div className="nav__tabs-image-overlay"></div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div className="nav__tabs-text-container">
                        <div>
                          <h3 className="nav__tabs-content-heading">Power Boilers</h3>
                          <p className="nav__tabs-content-text">
                            High-capacity boilers engineered for thermal power generation, designed for optimal fuel efficiency and long-term reliability under demanding operating conditions.
                          </p>
                        </div>
                        <button className="nav__tabs-cta-btn">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2: Process Boilers */}
              <div className="nav__tabs-panel" data-panel="1">
                <div className="nav__tabs-card">
                  <div className="row g-0 h-100">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="nav__tabs-image-container">
                        <img
                          src="/assets/images/bg/t4.jpg"
                          alt="Process Boilers"
                          className="nav__tabs-image"
                        />
                        <div className="nav__tabs-image-overlay"></div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div className="nav__tabs-text-container">
                        <div>
                          <h3 className="nav__tabs-content-heading">Process Boilers</h3>
                          <p className="nav__tabs-content-text">
                            Tailored boiler systems for chemical, pharmaceutical, and industrial processing applications, ensuring stable heat delivery and process efficiency.
                          </p>
                        </div>
                        <button className="nav__tabs-cta-btn">Explore More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 3: EPC Power Plant */}
              <div className="nav__tabs-panel" data-panel="2">
                <div className="nav__tabs-card">
                  <div className="row g-0 h-100">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="nav__tabs-image-container">
                        <img
                          src="/assets/images/bg/t1.jpg"
                          alt="EPC Power Plant"
                          className="nav__tabs-image"
                        />
                        <div className="nav__tabs-image-overlay"></div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div className="nav__tabs-text-container">
                        <div>
                          <h3 className="nav__tabs-content-heading">EPC Power Plant</h3>
                          <p className="nav__tabs-content-text">
                            End-to-end Engineering, Procurement, and Construction services for thermal and renewable power plants — from concept to commissioning.
                          </p>
                        </div>
                        <button className="nav__tabs-cta-btn">View Projects</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 4: Air Pollution Control System */}
              <div className="nav__tabs-panel" data-panel="3">
                <div className="nav__tabs-card">
                  <div className="row g-0 h-100">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="nav__tabs-image-container">
                        <img
                          src="/assets/images/bg/t2.jpg"
                          alt="Air Pollution Control System"
                          className="nav__tabs-image"
                        />
                        <div className="nav__tabs-image-overlay"></div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div className="nav__tabs-text-container">
                        <div>
                          <h3 className="nav__tabs-content-heading">Air Pollution Control</h3>
                          <p className="nav__tabs-content-text">
                            Innovative pollution control systems including ESPs, bag filters, and scrubbers to help industries meet stringent emission norms and environmental goals.
                          </p>
                        </div>
                        <button className="nav__tabs-cta-btn">See Solutions</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="nav__tabs-indicators">
              <button className="nav__tabs-indicator active" data-indicator="0"></button>
              <button className="nav__tabs-indicator" data-indicator="1"></button>
              <button className="nav__tabs-indicator" data-indicator="2"></button>
              <button className="nav__tabs-indicator" data-indicator="3"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-area-v2">
        <div className="container">
          <div className="cta-wrapper main-bg">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title section-white-title">
                  <h2>
                    Looking for a reliable
                    &amp; stable partner?
                  </h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="button-box text-lg-right">
                  <a href="#" className="main-btn">Contact Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="counter-area-v3">
        <div className="container">
          <div className="counter-wrapper">
            <div className="row">
              <div className="counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <h2><span className="counter">5698</span> <span className="plus">+</span></h2>
                  <h4>Total Project</h4>
                </div>
              </div>
              <div className="counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <h2><span className="counter">985</span> <span className="plus">+</span></h2>
                  <h4>Cuf Of Tea</h4>
                </div>
              </div>
              <div className="counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <h2><span className="counter">8628</span> <span className="plus">+</span></h2>
                  <h4>Team Members</h4>
                </div>
              </div>
              <div className="counter-column col-lg-3 col-md-6 col-sm-12">
                <div className="counter-box">
                  <h2><span className="counter">698</span> <span className="plus">+</span></h2>
                  <h4>Win Awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-area-v2 pt-105 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                <h2>Here Are Some Of Our Most Valuable Comments.</h2>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row testimonial-slider-two">
            {/* Testimonial Slide 1 */}
            <div className="col-lg-6">
              <div className="testimonial-item">
                <div
                  className="td-thumb bg_cover"
                  style={{ backgroundImage: "url('/assets/images/bg/testi.png')" }}
                >
                  <i className="icon">“</i>
                </div>
                <div className="td-content">
                  <p>
                    “Our experience with PowerHeat Boilers was exceptional. The team's attention to detail, engineering knowledge, and timely support have significantly boosted our plant's efficiency.”
                  </p>
                  <div className="td-author-info d-flex justify-content-between align-items-center">
                    <div className="td-author">
                      <h4 className="title">Michael Stevens</h4>
                      <p className="position">Operations Director</p>
                    </div>
                    <div className="td-rating">
                      <ul className="rating">
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Slide 2 */}
            <div className="col-lg-6">
              <div className="testimonial-item">
                <div
                  className="td-thumb bg_cover"
                  style={{ backgroundImage: "url('/assets/images/bg/testi2.png')" }}
                >
                  <i className="icon">“</i>
                </div>
                <div className="td-content">
                  <p>
                    “The industrial boiler solutions provided by PowerHeat were highly reliable and came with great after-sales support. I’d recommend them to any large-scale facility.”
                  </p>
                  <div className="td-author-info d-flex justify-content-between align-items-center">
                    <div className="td-author">
                      <h4 className="title">Raman</h4>
                      <p className="position">Plant Manager</p>
                    </div>
                    <div className="td-rating">
                      <ul className="rating">
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Slide 3 */}
            <div className="col-lg-6">
              <div className="testimonial-item">
                <div
                  className="td-thumb bg_cover"
                  style={{ backgroundImage: "url('/assets/images/bg/testi.png')" }}
                >
                  <i className="icon">“</i>
                </div>
                <div className="td-content">
                  <p>
                    “Thanks to their turnkey boiler installation, our production downtime was minimized and operations are running smoothly. Great job by the engineering team!”
                  </p>
                  <div className="td-author-info d-flex justify-content-between align-items-center">
                    <div className="td-author">
                      <h4 className="title">Riya</h4>
                      <p className="position">Senior Engineer</p>
                    </div>
                    <div className="td-rating">
                      <ul className="rating">
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                        <li><i className="icofont-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <div className="choose-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>

            <div className="col-lg-4 pr-0 pl-0">
              <div className="form-contact-box wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                <div className="form-content">
                  <h4>Contact Us</h4>
                </div>
                <form action="#" method="POST" id="dreamit-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_box">
                        <input type="text" name="name" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box">
                        <input type="email" name="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box">
                        <input type="text" name="phone" placeholder="Preferred Inspection Date" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box">
                        <input type="text" name="location" placeholder="Location" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="quote_button">
                        <button className="btn" type="submit">Book Appointment</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status"></div>
              </div>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-6">
              <div className="consen-section-title white">
                <h2>Saviour Boiler – Powering Industry </h2>
                <p>
                  At Saviour Boiler, we deliver robust and reliable industrial boiler solutions designed to meet
                  modern standards. From thermal efficiency to safety, our systems ensure smooth operations across industries.
                  Trusted by clients globally, we continuously innovate to exceed expectations.
                </p>
              </div>

              <div className="row wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                {[
                  { title: "Strong Growth", icon: "item1.png" },
                  { title: "Strong Bonds", icon: "item2.png" },
                  { title: "Excellent Workers", icon: "item3.png" },
                  { title: "Global  Partner", icon: "item4.png" },
                ].map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="choose-us-item">
                      <div className="choose-icon">
                        <img src={`/public/assets/images/bg/${item.icon}`} alt={item.title} />
                      </div>
                      <div className="choose-content">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="choose-shape wow fadeInDown animated" style={{ visibility: 'visible', animationName: 'fadeInDown' }}>
              <img src="/assets/images/bg/c1.jpg" alt="Decorative Shape" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;