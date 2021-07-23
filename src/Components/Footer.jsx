import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6">
              <div class="copyright">
                &copy; Copyright <strong>Agm</strong>. All Rights Reserved
              </div>
              <div class="credits">
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="/Home" class="scrollto">Home</a>
                <a href="/Services" class="scrollto">Services</a>
                <a href="/HireDevelopers">Hire Developers</a>
                <a href="/Portfolio">Portfolio</a>
                <a href="/Contact">Contact Us</a>
                <a href="/Aboutus">About Us</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;