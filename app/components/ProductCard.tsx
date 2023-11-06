import React from "react";
import PushMeButton from "./PushMeButton";
import styles from "./ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className={`${styles.card} mt-2`}>
      ProductCard
      <div>
        <PushMeButton/>
      </div>
    </div>
  );
};

export default ProductCard;
