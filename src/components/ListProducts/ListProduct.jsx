import React from "react";
import ProductCard from "./Product";

export default function ProductCardGrid() {
  const cards = Array.from({ length: 7 }, (_, index) => <ProductCard key={index} />);


  return (
    <div className="column">
      <h4 className="text-textStrongColor font-bold sm:text-3xl text-xl sm:mt-10 sm:mb-2 sm:mx-5 mt-6 mb-1 mx-2 text-center max-w-full justify-center">Danh sách sản phẩm</h4>
      <div className="border-t border-blue-700 sm:mb-4 mb-2 mx-auto w-[20vh] justify-center text-center "></div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2">
        {cards}
      </div>
    </div>
  );
}
