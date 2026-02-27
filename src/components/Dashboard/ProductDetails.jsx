import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import ProductDetailsLoder from "../Lodder/ProductDetailsLoder";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://task-api-eight-flax.vercel.app/api/products/${id}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <ProductDetailsLoder></ProductDetailsLoder>
    );
  }

  if (!product) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p className="text-gray-800">Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Back
      </button>

      {/* Product Details */}
      <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">Sales: {product.sales}</p>
    </div>
  );
};

export default ProductDetails;