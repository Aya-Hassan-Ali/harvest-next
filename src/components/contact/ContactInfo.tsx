

import React from 'react'

export default function ContactInfo() {
  return (
    <>
      <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Address
                  </h5>
                  <a href="#" className="pra">
                    Rayhana Tower, Zahraa El-Maadi, Cairo, Egypt<br /> 
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Lets Talk us
                  </h5>
                  <a href="#" className="pra">
                    Telephone number: +2(02)25169957 <br />
                    
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Send us email
                  </h5>
                  <a href="#" className="pra">
                    info@strategizeit.us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
