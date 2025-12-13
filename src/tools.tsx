
import { motion, type Variants } from "framer-motion"; 


import ps from "./adobe-photoshop-logo-0-2048x2048-1-1536x1536.png";
import ai from "./R-removebg-preview.png";
import canva from "./OIP__6_-removebg-preview.png";
import figma from "./OIP__7_-removebg-preview.png";






const itemVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};


const Logo = () => (

  <div className="flex-shrink-0 flex items-center justify-between w-[900px] h-full px-16 gap-16">
    <img
     
      className="w-20 h-auto transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(241,169,62,0.6)]"
      src={ps}
      alt="Photoshop"
    />
    <img
      className="w-16 h-auto transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(241,169,62,0.6)]"
      src={ai}
      alt="Illustrator"
    />
    <img
      className="w-24 h-auto transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(241,169,62,0.6)]"
      src={canva}
      alt="Canva"
    />
    <img
      className="w-12 h-auto transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(241,169,62,0.6)]"
      src={figma}
      alt="Figma"
    />
  </div>
);



const Tools = () => {
  return (
    <>
      <div
        id="tools"
        className="min-h-screen flex flex-col justify-start items-center relative text-center overflow-hidden"
      >
        
       

      
        <div className="king z-10 relative">
          <motion.h1
            className="text-6xl font-bold poppins-extrabold mt-20 text-[#A2DC36] hh montserrat"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            MY TOOLS
          </motion.h1>

          <motion.p
            className="text-white mt-6 poppins-light pp playfair-display"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Tools I use to bring your ideas to life
          </motion.p>
        </div>

   
        <div className="h-[140px] w-[900px] relative mt-[100px] overflow-hidden rounded-2xl border border-[#A2DC36]/30 backdrop-blur-md shadow-[inset_0_0_20px_rgba(241,169,62,0.15)] tool-king z-10">
          
          <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-[#1a1a1a] via-transparent to-transparent pointer-events-none z-20"></div>

          <motion.div
            className="flex mt-[25px]"
           
            animate={{ x: ["-900px", "0px"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            }}
          >
            <Logo />
            <Logo />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Tools;