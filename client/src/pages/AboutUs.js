import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authOrder } from '../action/orderAction';

const AboutUs = () => {

  return (
    <Row>
      <Col md={12}>
        <Row>
          <h2>About us</h2>
        </Row>
        <Row>
          <Col md={2}>
            <h6><strong>Mobile No</strong></h6>
          </Col>
          <Col md={10}>
            <h6>+91 9773289513</h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <h6><strong>Email:</strong></h6>
          </Col>
          <Col md={10}>
            <h6>thelpservice@gmail.com</h6>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <h6>Address:</h6>
          </Col>
          <Col md={10}>
            <h6>G-401, Omkar residency,</h6>
            <h6>B/H Talav, Mota varachha</h6>
            <h6>Surat,GJ - 394101</h6>
            <h6>India</h6>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AboutUs;
