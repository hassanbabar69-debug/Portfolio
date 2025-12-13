import { motion , type Variants } from "framer-motion";

import sanan from './WhatsApp Image 2025-11-02 at 00.41.41_20e15820.jpg'; 
import './index.css'


const pulse : Variants = {
  inView: {
    scale: [1, 1.01, 1],
    opacity: [1, 0.95, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,   
      repeatType: "mirror"
    }
  }
};

const imageFloat : Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

const About = () => {
  return (
    <section 
      id="aboutme" 
      
      className="relative w-full min-h-screen h-auto flex flex-col lg:flex-row items-center justify-start lg:justify-center px-6 sm:px-12 lg:px-24 py-32 lg:py-0 text-[#A2DC36] gap-10 lg:gap-0 overflow-hidden bg-black"
    >
      
     
    
     
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center z-10" 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
      >
        <motion.div 
        
          className="relative flex-shrink-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-[#A2DC36] shadow-[0_0_30px_rgba(162,220,54,0.3)] md:mt-24 lg:mt-[120px] lg:mr-[150px] imgs"
          variants={imageFloat}
          animate="animate"
        >
          <img 
            src={sanan} 
            alt="Sannan Ahmad Siddiqui" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      
     
      <motion.div
      
        className="w-full lg:w-[900px] flex flex-col justify-center mt-10 md:mt-20 lg:mt-[300px] z-10 texts" 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }} 
      >
        
        <motion.p 
       
          className="text-center md:text-center lg:text-left text-base md:text-2xl lg:text-xl leading-relaxed playfair-display text-white small-text"
          variants={pulse}
          animate="inView" 
        >
          Hi, I’m <span className="font-semibold text-[#A2DC36]">Sannan Ahmad Siddiqui</span>, a passionate graphic designer specializing 
          in <span className="font-medium text-[#A2DC36]">car poster design, social media visuals, product design, and shirt graphics</span>.
          <br /><br />
          I combine a minimal and modern design style with the smart use of <span className="font-semibold text-white" >AI tools</span> to bring 
          fresh, innovative ideas to every project.
          <br /><br />
          With expertise in <span className="font-medium text-[#A2DC36]">Adobe Photoshop, Illustrator, Canva, and Figma</span>, 
          I focus on creating visuals that are not only eye-catching but also meaningful and balanced.
          <br /><br />
          Design for me isn't just about <span className="font-semibold text-[#A2DC36]">aesthetics</span>; it's about <span className="font-semibold text-[#A2DC36]">solving problems</span> visually 
          and communicating ideas in the most impactful way possible.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;