import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import NavbarComponent from "../components/NavbarComponent";

const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <header className="w-100 min-vh-100 d-flex align-items-center banner">
        <Container>
          <Row className="header-box">
            <Col lg={6} className="d-flex align-items-center">
              <div className="contact-info">
                <h1>
                  <span className="color5">CONTACT</span>
                  <span className="color6"> US</span>
                </h1>
                <p><FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />{' '}kedaikecresna@gmail.com</p>
                <p><FontAwesomeIcon icon={faUserGroup} size="2x" className="icon" />{' '}0857-1961-0715</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon" />{' '}SMKN 1 CIOMAS</p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="contact-container">
                <form className="contact-form">
                  <label>Nama *</label>
                  <input type="text" name="nama" />

                  <label>Nomor telepon *</label>
                  <input type="tel" name="telepon" />

                  <label>Pesan *</label>
                  <textarea name="pesan" rows="4"></textarea>

                  <div className="button-container">
                    <button type="submit"><strong>Kirim</strong></button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default ContactPage;
