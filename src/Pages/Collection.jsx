import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import dropdown from "../assets/dropdown-icon.png";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, setCategory, setSort } = useContext(ProductContext);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  // Handle category selection
  const handleCategoryChange = (category) => {
    setCategory(category); // Update context state
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-10 sm:pt-14 min-h-[80vh] border-t ">
      {/* Filter Options */}
      <div className="w-full sm:max-w-[320px] p-6 shadow-lg">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-700 font-medium"
        >
          FILTERS
          <img
            className={`h-4 transition-transform ${showFilter ? "rotate-90" : ""}`}
            src={dropdown}
            alt="dropdown"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 p-4 mt-4 rounded-lg bg-white transition-all duration-300 ${showFilter ? "block" : "hidden sm:block"}`}>
          <p className="mb-3 text-sm font-medium text-gray-700">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["", "Indoor", "Outdoor"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className="border px-3 py-2 rounded-lg hover:bg-gray-200"
              >
                {category === "" ? "All Products" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 pe-1">
        <div className="flex justify-between items-center text-base sm:text-lg mb-6 p-4 bg-white rounded-lg shadow-md">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by: Default</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product._id}
              name={product.name}
              price={product.price}
              image={[product.images]}
              func={() => navigate(`/product/${product._id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
