import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../assets/dropdown-icon.png";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem"; // Ensure this is correctly imported

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");



  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())
    )
    }
    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    setFilterProducts(productsCopy);
  };




  useEffect(() => {
    applyFilter();
  }, [selectedCategories, products, search, showSearch]);



  // Initialize filterProducts when products update
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);



  // Log the selected categories for debugging
  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);



  // Handle category toggle
  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };



  // Filter products based on selected categories
  useEffect(() => {
    if (selectedCategories.length > 0) {
      const filtered = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilterProducts(filtered);
    } else {
      setFilterProducts(products);
    }
  }, [selectedCategories, products]);


  // Handle sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    const sorted = [...filterProducts];
    if (value === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilterProducts(sorted);
  };



  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">


      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={dropdown}
            alt="dropdown"
          />
        </p>



        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Indoor Decorations"
                onChange={() => toggleCategory("Indoor Decorations")}
              />
              Indoor Decorations
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Outdoor Decorations"
                onChange={() => toggleCategory("Outdoor Decorations")}
              />
              Outdoor Decorations
            </p>
          </div>
        </div>
      </div>



      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />


          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>


        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              name={product.name}
              id={product.id}
              price={product.price}
              image={[product.imageUrl]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
