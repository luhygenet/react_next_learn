import React from "react";
import AddToCart from "./addToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
