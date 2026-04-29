import React from "react";
import ProductCardListView from "../../components/ProductCardListView";

const MyLists = () => {
  return (
    <div className="bg-white p-5 rounded-md w-full">
      <h2 className="text-xl font-medium capitalize mb-6">My Lists</h2>
      <div className="space-y-5">
        {[...Array(20)].map((_, index) => (
          <ProductCardListView key={index} />
        ))}
      </div>
    </div>
  );
};

export default MyLists;
