import React from "react";
import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion";


  // ... (your existing data array)
  const ProductsData = [
    {
      id: 1,
      img: "https://img.kwcdn.com/product/aisc_image/fancy/2024-05-12/37b1e246-548b-4bf6-be32-da35af8f11b0_1715524696.jpg?imageView2/2/w/800/q/70/format/webp",
      title:
        "10pcs Set 3D Mirror Acrylic Ceiling Trim - Retro Style for Living Room, Bedroom, Hotel & Club Decor",
      price: "₦2,486.",
      rating: "4.9",
    },
    {
      id: 2,
      img: "https://img.kwcdn.com/product/fancy/ae5c2cd2-69cc-42ed-b2fc-da6fbf827054.jpg?imageView2/2/w/800/q/70/format/webp",
      title:
        "1pc Silvery Oval Acrylic Mirror Wall Sticker - Self-Adhesive, Removable Decor for Bathroom, Living Room, Kitchen & More",
      price: "₦3,581",
      rating: "4.9",
    },
    {
      id: 3,
      img: "https://img.kwcdn.com/product/fancy/8244ffdc-aaae-49e5-81e1-a4ae724a9426.jpg?imageView2/2/w/800/q/70/format/webp",
      title:
        "17pcs Creative Acrylic Mirror Wall Stickers Set - Explosion-Proof, No-Drill 3D Diamond Pattern",
      price: "₦14,224",
      rating: "4.9",
    },
    {
      id: 4,
      img: "https://img.kwcdn.com/product/open/2023-08-18/1692356301141-1f54358f2d3c402ca86150d851711d02-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
      title:
        "12pcs/set 3D Mirror Wall Decor, Mirror Butterfly Wall Stickers, DIY Wall Painting, Mirror Wall",
      price: "₦1,853",
      rating: "4.9",
    },
    {
      id: 5,
      img: "https://img.kwcdn.com/product/fancy/21efa039-8cdc-490a-8e61-ea00dce51db5.jpg?imageView2/2/w/800/q/70/format/webp",
      title:
        "7pcs Boho Style DIY Mirror Set - Acrylic Mirror Wall Stickers for Living Room, Bedroom, Bathroom, Kitchen & More",
      price: "₦13,942",
      rating: "4.9",
    },
    {
      id: 6,
      img: "https://img.kwcdn.com/product/fancy/aaf19baf-6c8b-434f-b01b-21519db8e017.jpg?imageView2/2/w/800/q/70/format/webp",
      title:
        "1 Set Of Acrylic Mirror Wall Stickers Splicing Screen Partition Wall Home Art Decal Removable Wallpaper Mural Stickers Self Adhesive Tree Branch Combo DIY Decoration Living Room Bedroom Bathroom Office 54.7*19.6 Inch Silvery",
      price: "₦31,260",
      rating: "4.9",
    },
  
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data className="text-sm text-cyan-300">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            beatae, iure aperiam non repellat voluptatem iusto quasi quia id
            tempora quis, quaerat, iste minus odit. Voluptatum voluptas omnis
            iste fugit?
          </p>
        </div>
        {/* Body section */}
        <motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
            {/* card section */}
            {ProductsData.map((product) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                key={product.id}
                className="space-y-3">
                <img
                  src={product.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"/>
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.price}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400"/>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;