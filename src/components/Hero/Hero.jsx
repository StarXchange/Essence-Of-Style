// import React from 'react';
import hero from "../../assets/Hero/hero.png"
import hero2 from "../../assets/Hero/hero2.png"

// const HeroImageList = [
//     {
//         id: 1,
//         imh: hero,
//         title: "upto 50% pn all men wears",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
//     },
//     {
//         id: 2,
//         imh: hero2,
//         title: "upto 50% pn all men wears",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
//     },

// ];

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px]  flex justify-center items-center duration-200">
//         {/* background pattern */}
//         <div className="h-[700px] w-[700px]  bg-cyan-950 absolute -top-1/2 right-0 rounded-2xl rotate-45 -z-9">

//         </div>
//         {/* hero section */}
//         <div className="container pb-8 sm:pb-0">
//             <div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2">
//                     {/* text content section */}
//                     <div>
//                         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
//                         Lorem ipsum dolor 
//                         </h1>
//                         <p className="tex-sm"> 
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquama.
//                         </p>
//                         <div>
//                             <button className="bg-cyan-300  text-black py-2 px-4 rounded-full hover:bg-cyan-950 duration-200 hover:text-white">
//                                 Order Now</button>
//                         </div>    
//                     </div>
//                     {/* image section */}
//                     <div>
//                         <div>
//                             <img src={hero2   }
//                             alt=""
//                             className="w-[300px] sm:h-[450px] sm:w[450px] sm:scale-125 object-contain mx-auto " />
//                         </div>
//                     </div>
//                     {/* text content section */}

//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

import React from 'react'

const Hero = () => {
  return (
    <div>
        {/* Hero section */}
        <section>
    <div class="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36     xl:py-48">
        <div class="absolute inset-0 hidden lg:block">
            <img class="object-cover object-right w-full h-full" src={hero2} alt="" />
        </div>

        <div class="absolute inset-x-0 top-0 hidden lg:block">
            <div class="py-5">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <nav class="flex items-center space-x-8">
 </nav>
                </div>
            </div>
        </div>
        {/* Hero content */}
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
               
                <h1 class="mt-3 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl xl:text-7xl">Welcome To Essence Of Style.</h1>
                <p class="text-base font-bold text-gray-600">Introducing our newest interior designs at Essence of Style!</p>

                <div class="mt-8 sm:mt-12">
                    <a
                        href="#"
                        title=""
                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border border-transparent
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-gray-600
                            focus:ring-offset-[#FFE942]
                             group-hover:w-[300px]
                             
                        "
                        role="button">
                        Order Now
                    </a>
                </div>
            </div>

            <div class="mt-8 lg:hidden">
                <img class="w-full mx-auto" src={hero2} alt="mirror-set" />
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Hero
// export default Hero