import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Arslan..</span>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100009200415732">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammed-arslan-aa8808276/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Muhammad Arslan..
        </p>
      </div>
    </footer>
  );
}

export default Footer;