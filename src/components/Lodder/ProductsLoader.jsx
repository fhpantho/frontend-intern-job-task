import React from "react";

const ProductsLoader = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 animate-pulse">
      {/* Title placeholder */}
      <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>

      {/* Product card placeholders */}
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="flex items-center justify-between p-4 border rounded-xl"
        >
          {/* Name & Price placeholder */}
          <div className="space-y-2 w-full">
            <div className="h-4 w-32 bg-gray-200 rounded"></div> {/* Name */}
            <div className="h-3 w-20 bg-gray-300 rounded"></div> {/* Price */}
          </div>

          {/* Button placeholder */}
          <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductsLoader;