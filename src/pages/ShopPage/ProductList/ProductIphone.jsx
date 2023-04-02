import React from "react";
import Api from "../../../API/API";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";
function ProductIphone() {
  const navigate = useNavigate();

  const handlerClick = (e) => {
    navigate(`/detail/${e._id.$oid}`);
  };
  const { api } = Api();
  const product = api.filter((element) => element.category === "iphone");
  //console.log(product.category);
  return (
    <div className="products">
      {product.map((product) => {
        return (
          <div className="product">
            <img
              className="image"
              onClick={() => {
                handlerClick(product);
              }}
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

export default ProductIphone;
