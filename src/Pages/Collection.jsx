import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../assets/dropdown-icon.png";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");
  const navigate = useNavigate();

  // Apply filters and sorting
  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (sortOption === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  };

  // Apply filter on dependency changes
  useEffect(() => {
    applyFilter();
  }, [selectedCategories, products, search, showSearch, sortOption]);

  // Toggle category selection
  const toggleCategory = (category) =>
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );

  const singlePage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-10 sm:pt-14 min-h-[80vh] border-t bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Filter Options */}
      <div className="w-full sm:max-w-[320px] p-6 rounded-lg shadow-lg">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-700 font-medium"
        >
          FILTERS
          <img
            className={`h-4 transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            src={dropdown}
            alt="dropdown"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 p-4 mt-4 rounded-lg bg-white transition-all duration-300 ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          <p className="mb-3 text-sm font-medium text-gray-700">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["Indoor Decorations", "Outdoor Decorations"].map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  className="w-4 h-4 rounded border-gray-300"
                  type="checkbox"
                  value={category}
                  onChange={() => toggleCategory(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-lg mb-6 p-4 bg-white rounded-lg shadow-md">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((product) => (
            <ProductItem
              key={product._id}
              name={product.name}
              // id={product.id}
              price={product.price}
              image={[product.images]} // Wrap imageUrl in an array
              func={() => singlePage(product._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
