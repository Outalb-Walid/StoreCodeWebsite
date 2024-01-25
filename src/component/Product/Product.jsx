import React, { useState } from "react";
import css from "./Product.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";
function Product() {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Fonditions</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
