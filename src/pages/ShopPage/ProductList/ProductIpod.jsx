import React from "react";
import Api from "../../../API/API";

import "./ProductList.css";

function ProductIpod() {
  const { api } = Api();
  const product = api.filter((element) => element.category === "ipod");

  return (
    <div className="products">
      {product.map((product) => {
        return (
          <div className="product">
            <img
              className="image"
              key={product.id}
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

export default ProductIpod;
