import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer-area footer-area-v1 bg_cover" style={{ backgroundImage: 'url(assets/images/bg/footer-bg-1.jpg)' }}>
  <div className="footer-widget pt-120 pb-90">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget about-widget mb-40">
            <img className='logo-footer' src="/assets/images/bg/LOGO.svg" alt="" />
           <p>Saviour Boiler stands as a trusted name in reliable heating solutions, with decades of proven excellence in the industry.</p>
           <ul className="social-link">
                  <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                  <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                  <li><a href="#"><i className="bx bxl-pinterest-alt"></i></a></li>
                  <li><a href="#"><i className="bx bxl-skype"></i></a></li>
                </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget widget-categories mb-40">
            <h4 className="widget-title">Quick Link</h4>
            <ul className="widget-link">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#"> Post</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget newsletter-widget mb-40">
            <h4 className="widget-title">Subscribe Now</h4>
            <div className="newsletter-form mb-20">
              <form>
                <div className="form_group">
                  <input
                    type="email"
                    className="form_control"
                    placeholder="saviour@gmail.com"
                    name="email"
                  />
                  <button className="newsletter-btn"><i className="icofont-arrow-right"></i></button>
                </div>
              </form>
            </div>
            <div className="newsletter-info">
              <h5>Give us a free call:</h5>
              <p>
                <a href="tel:+1800456324">(+91) 9625181162</a> or{" "}
                <a href="tel:+1555456325">(+91) 7042788393</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget instragram-widget mb-40">
            <h4 className="widget-title">Instragram</h4>
            <ul className="instagram-list">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num}>
                  <a href="#">
                    <img src={`/assets/images/bg/p${num}.jpg`} alt="" />
                    <div className="insta-overlay">
                      <i className="icofont-plus"></i>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="copyright-text text-center">
            <p>Copyright © 2025. All right reserved. Design by <span>JBH</span>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
