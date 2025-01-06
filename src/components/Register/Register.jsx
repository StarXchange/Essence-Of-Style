// import React from "react";

// const subTitle = "Save The Day";
// const title = (
//   <h2 className="title">
//     Join onDay Long Free Workshop for <b>Advance</b>
//     <span>on Sales</span>
//   </h2>
// );

// const desc = "Limited Time Offer! Hurry Up";
// const Register = () => {
//   return (
//     <section className="register-section padding-tb pb-0">
//       <div className="container">
//         <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
//           <div className="col">
//             <div className="section-header">
//               <span className="subTitle">{subTitle}</span>
//               {title}
//               <p>{desc}</p>
//             </div>
//           </div>
//           <div className="col">
//             <div className="section-wrapper">
//               <h4>Register Now</h4>
//               <form className="register-form">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Username"
//                   className="reg-input"
//                 />
//                 <input
//                   type="email"
//                   name=" email"
//                   placeholder="Email"
//                   className="reg-input"
//                 />
//                 <input
//                   type="number"
//                   name="number"
//                   placeholder="Phone"
//                   className="reg-input"
//                 />
//                 <button type="submit" className="lab-btn">
//                   Register Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;

import React from "react";
import Worldmap from "../../assets/Worldmap.png";
import { motion } from "framer-motion";


const Register = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:gri-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="number"
              placeholder="Phone"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className=" primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <img
            src={Worldmap}
            alt="WORLD-MAP"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
