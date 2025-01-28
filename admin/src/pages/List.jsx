import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const List = () => {
  const [products, setProducts] = useState([]);

  // Modal Opening
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    category: "",
    price: "",
    images: "",
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/list");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products); // Update state with fetched products
      toast.success("Products fetched successfully!");
      console.log("Fetched products:", data.products);
    } catch (error) {
      toast.error(`Error fetching products: ${error.message}`);
      console.error("Error fetching products:", error.message);
    }
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("adminToken"); // Retrieve token from localStorage
    if (!token) {
      toast.error("You are not authorized to delete products.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
        body: JSON.stringify({ id }), // Pass the product ID in the request body
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message); // Notify on successful deletion
        setProducts(products.filter((product) => product._id !== id)); // Remove product from the list
      } else {
        toast.error(data.message); // Notify on failure
      }
    } catch (error) {
      toast.error(`Failed to delete product: ${error.message}`);
      console.error("Delete product error:", error.message);
    }
  };

  // handleUpdate

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ToastContainer />
      <p className="mb-2">All Product List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border-b text-sm"
          >
            <div>
              <img
                src={product.images || "placeholder-image-url.jpg"}
                alt={product.name}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>{product.name}</div>
            <div>{product.category}</div>
            <div>${product.price}</div>
            <div className="text-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
