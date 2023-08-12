import React from "react";
import { Carousel } from "react-bootstrap";

export default function MySlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/03/34/79/68/1000_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Men Clothes</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/clothes-19562230.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Women Clothes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@sc04/kf/H851347a393d540849f29b9e7c672b83bv.jpg_960x960.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Children Clothes</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
