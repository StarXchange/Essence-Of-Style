//products array
const products = [
    {
      id: 1,
      name: "7pcs Boho Style DIY Mirror Set",
      category: "Indoor Decorations",
      price: 13.973,
      description:
        "Self-Adhesive Acrylic Mirrors, Irregular Shape, Horizontal Orientation, No Electricity Needed, Perfect for Wall.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/58fb1cfa-1453-496e-8fc5-5ae820954c0d.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 2,
      name: "1 Set Of Acrylic Mirror Wall ",
      category: "Outdoor Decorations",
      price: 25.957,
      description:
        "Splicing Screen Partition Wall Home Art Decal Removable Wallpaper Mural Stickers Self Adhesive Tree Branch Combo DIY Decoration Living Room Bedroom Bathroom Office 54.7*19.6 Inch Silvery.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/332d17b7-b107-47d0-b3ea-805b3974c477.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 3,
      name: "2pcs Elegant Leaf Pattern Peel & Stick Door Murals ",
      category: "Indoor Decorations",
      price: 17.199,
      description:
        "Removable Waterproof Vinyl Wallpaper, Modern PVC Stickers for Home Office Decor, 200.0cmx15.2, Wall Stickers Home Decor.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/1c58e45d-c2d2-4997-aa52-f0e708bed9bc.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 4,
      name: "1pc Frameless Golden Bonsai Sanctuary Wall Art",
      category: "Indoor Decorations",
      price: 20.932,
      description:
        "79.98x119.99cm Modern Abstract Canvas Print, Decorative Poster for Bedroom and Living Room, Other Major Material, No Frame.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/397dead9-95a0-423c-8114-8bc1fcff172d.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: false,
    },
    {
      id: 5,
      name: "1pc Abstract Couple Heart Design Canvas Art Print",
      category: "Indoor Decorations",
      price: 30.457,
      inStock: true,
      description:
        "Modern Love Wall Decor Poster, Creative Unframed Wall Art for Living Room, Bedroom, Office, Dining Room, Waterproof Printed Artwork, Perfect Gift and Decoration.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/f0b0f7f2-f92b-425b-ab9e-6517f4a8811b.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: false,
    },
    {
      id: 6,
      name: "5pcs Art Deco & Contemporary Style Horse Canvas Wall Art Set",
      category: "Indoor Decorations",
      price: 129.99,
      inStock: true,
      description:
        "Frameless & Framed Animal Prints, Waterproof & Odorless Canvas, Indoor & Outdoor Zebra Theme Artwork, with Wall Hanging Decor for Living Room, Bedroom, Dining Room, Home Office.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/7beeb0ae-54cc-4d34-9ac7-0faa19820dbb.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: false,
    },
    {
      id: 7,
      name: "Rhombus Mirror Self-adhesive Wall Sticker",
      category: "Indoor Decorations",
      price: 19.99,
      description:
        "Acrylic Three-dimensional Wall Sticker for Living Room TV Sofa Background Painting, Casual Pop-culture Home Decoration Wall Sticker Supplies.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/fb026bb7-8ca5-45bc-98a7-9f6e9526e125.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 8,
      name: "1 Set Diamond-Patterned Acrylic Mirror Wall Stickers",
      category: "Indoor Decorations",
      price: 89.99,
      description: "Removable, No Power Needed, Perfect for Home Decor.",
      imageUrl:
        "https://img.kwcdn.com/product/open/2024-08-16/1723774279721-13e0b55039c043fa9702e433ab0324d5-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 9,
      name: "Golden Archangel Michael Aluminum Wall Art",
      category: "Indoor Decorations",
      price: 249.99,
      inStock: false,
      description:
        " 20.32cm X 30.48cm | Perfect For Cafes, Bedrooms, Bars, For Man Caves & Living Rooms.",
      imageUrl:
        "https://img.kwcdn.com/product/open/2024-08-02/1722578755894-4d11c9c011764f3eaa73e526f9329235-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 10,
      name: "32pcs Classic Round Acrylic Mirror Wall Sticker",
      category: "Indoor Decorations",
      price: 39.99,
      description:
        "Self-adhesive Removable Art Mirror Tile Sticker for Ceramic Surface, Horizontal Orientation, No Electricity Required.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/43207d11-8db7-42d7-831e-1dc1617c5191.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 11,
      name: "Mirror, Feather Mirror, Mirror Wall Sticker",
      category: "Indoor Decorations",
      price: 199.99,
      inStock: true,
      description: " Popular Feather Dressing Mirror, Full-length Mirror.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/95c108e3-4779-4827-9fbb-2c6cf50ca1ab.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
    {
      id: 12,
      name: "The Silent Faces Of People Are Golden Abstract Resin Art Pieces",
      category: "Indoor Decorations",
      price: 59.99,
      inStock: true,
      description:
        "The Silent Faces Of People Are Golden Abstract Resin Art Pieces For Home Decoration, Consisting Of 3 Items..",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/8e6e001b-8220-49f4-ac20-88be5cdee8ae.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: false,
    },
    {
      id: 13,
      name: "1pc Round Wall Mounted Mirror",
      category: "Indoor Decorations",
      price: 29.99,
      inStock: true,
      description:
        "Stainless Steel Frame Wall Decor Mirrors, Makeup Mirror, Bathroom Bedroom Glass Vanity Mirror, Home Decor, Bathroom Accessories.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/497a247c-90b7-415c-b0a1-2dd8cff14102.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: false,
    },
    {
      id: 14,
      name: "3pcs Art Deco Bohemian French Style Geometric Landscape Triptych Wall Art Set",
      category: "Indoor Decorations",
      price: 79.99,
      description:
        "Indoor Resin Framed 3D Print Paintings for Home Office, Living Room, Bedroom, Dining Room Decor - Waterproof, Fall & Winter Themed.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/e8c3c171-4ce4-4f36-99aa-a3882fbff68d.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: false,
    },
    {
      id: 15,
      name: "1pc Frameless Golden Tree of Harmony Canvas Art Print",
      category: "Indoor Decorations",
      price: 49.99,
      inStock: true,
      description:
        "Modern Abstract Wall Decor for Living Room and Bedroom, 79.98x119.99 cm, Room Decor.",
      imageUrl:
        "https://img.kwcdn.com/product/fancy/6fd7e3c9-4641-4ad7-8d4f-d3fddb6f4de5.jpg?imageView2/2/w/800/q/70/format/webp",
        bestseller: true,
    },
  ];
  
  export default products;
  