import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
            <FacebookIcon/>
            </a>
            <a href="" className="me-4 text-reset">
            <InstagramIcon/>
            </a>
            <a href="" className="me-4 text-reset">
            <LinkedInIcon/>
            </a>
            <a href="" className="me-4 text-reset">
            <WhatsAppIcon/>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Orna & Stones
                </h6>
                <p>
                a unique destination for exquisite handmade jewelry crafted with passion and precision. Our company takes pride in offering a curated collection of one-of-a-kind pieces that reflect the artistry, creativity, and dedication of skilled artisans.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Necklace</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Rings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Earing</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">About</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Cart</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold px-2" href="https://mdbootstrap.com/">BIZGIGS</a>
        </div>
      </footer>
    </div>
  );
}
