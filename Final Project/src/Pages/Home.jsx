import React from "react";
import MySlider from "../functionComponent/MySlider";
import Tabs from "../functionComponent/Tabs";
import Content from "../functionComponent/Content";
// import { products } from "../model/products";
export default function Home() {
  return (
    <div>
      <MySlider />
      <Content/>
      <Tabs/>
    </div>
  );
}
