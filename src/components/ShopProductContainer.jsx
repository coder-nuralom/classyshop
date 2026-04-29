import React from "react";
import ProductCardListView from "../components/ProductCardListView";
import ProductCard from "../components/ProductCard";
import products from "../../Data/productsData";

const ShopProductContainer = ({ isGrid }) => {
  return (
    <div
      className={`grid gap-5 max-[450px]:gap-x-3 max-[450px]:gap-y-4 ${isGrid ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
    >
      {products.map((item, index) =>
        isGrid ? (
          <ProductCard product={item} key={index} />
        ) : (
          <ProductCardListView product={item} key={index} />
        ),
      )}
    </div>
  );
};

export default ShopProductContainer;
