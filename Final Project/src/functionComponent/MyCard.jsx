import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MyCard(props) {
  let navigate = useNavigate();
  let { productInfo } = props;
  let showDetails = () => {
    navigate(`/products/${productInfo.id}`);
  };
  return (
    <div className="col-sm-6 col-md-3" onClick={showDetails}>
      <Card className="w-100">
        <Card.Img
          variant="top"
          className="image  w-100"
          src={productInfo.imgSrc}
        />
      </Card>
    </div>
  );
}
