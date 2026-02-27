import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsLoader from "../Lodder/ProductsLoader";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
        setLoading(true)
      try {
        const res = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
  {
    return <ProductsLoader></ProductsLoader>
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Products List</h2>

      {/* Products */}
      <div className="space-y-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition"
          >
            {/* Name & Price */}
            <div>
              <h3 className="font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>

            {/* Button */}
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;