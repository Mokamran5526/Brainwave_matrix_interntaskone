import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Multimart</h1>
              </div>
              <p>Mulmart is your trusted online marketplace, offering a wide selection of quality products across categories like electronics, fashion, home essentials, and more. With a focus on customer satisfaction, Mulmart delivers a seamless shopping experience, competitive prices, and reliable service for all your daily needs.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>70 Washington Square South, New York, NY 10012, United States </li>
                <li>Email: uilib.help@gmail.com</li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
