import React from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../API/API";

import "./ProductList.css";

function ProductWatch() {
  const { api } = Api();
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate(`/detail/${e._id.$oid}`);
  };
  const product = api.filter((element) => element.category === "watch");

  return (
    <div className="products">
      {product.map((product) => {
        return (
          <div className="product">
            <img
              className="image"
              key={product.id}
              onClick={() => handlerClick(product)}
              src={product.img1}
              alt=""
              width="100%"
              height="300"
            />
            <h5>{product.name}</h5>
            <p>
              {Number(product.price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              VND
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductWatch;
