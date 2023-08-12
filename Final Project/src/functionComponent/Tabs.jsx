import React from "react";
import {
    womenClothes,
    menClothes,
    childClothes,
} from "../model/products";
import { Nav, Row, Tab } from "react-bootstrap";
import MyCard from "../functionComponent/MyCard";
export default function Tabs() {
    return (
      <div className="p-5 bg-dark text-center border-top">
        <h1 className="text-white">Our Products</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, iusto.
        </p>
        <div className="bg-dark border-top ">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
          >
            <Row >
              <Nav variant="pills" className="m-4">
                <Nav.Item className="col-md-2 col-md-offset-1 m-3">
                  <Nav.Link eventKey="first">Men Clothes</Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-md-2 col-md-offset-1 m-3">
                  <Nav.Link eventKey="second">Women Clothes</Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-md-2 col-md-offset-1 m-3">
                  <Nav.Link eventKey="third">Children Clothes</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="container">
                    <div className="row g-3">
                      {menClothes.map((product) => (
                        <MyCard productInfo={product} key={product.id} />
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="container">
                    <div className="row g-3">
                      {womenClothes.map((product) => (
                        <MyCard productInfo={product} key={product.id} />
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="container">
                    <div className="row g-3">
                      {childClothes.map((product) => (
                        <MyCard productInfo={product} key={product.id} />
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
}
