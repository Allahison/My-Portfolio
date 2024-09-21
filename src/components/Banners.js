import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/imges/arslan2.png" alt="Muhammad Arslan" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhammad Arslan</h6>
            <h3>Front-End Developer</h3>
            <p>
              Hello! I'm Muhammad Arslan, A passionate and dedicated Front-End
              Developer with 01 year of experience crafting engaging and
              intuitive user interfaces. I specialize in translating design
              concepts into interactive, responsive, and high-performance web
              applications that provide seamless user experiences across all
              devices and browsers.
            </p>
            <div className="banner-buttons">
              <a className="btn" href="https://www.linkedin.com/in/muhammed-arslan-aa8808276/">
                About Me
              </a>
              <a className="btn" href="/My cv/cv.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
